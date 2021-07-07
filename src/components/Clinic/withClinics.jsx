import React, { useEffect, useState } from "react";
import groupBy from "lodash/groupBy";
import {
    fetchClinics,
    millisecondsToString,
    isAllDay
} from "./utils";

//Map name of the days from API response to a presentable format
const daysOfWeek = {
    "mon": "Monday",
    "tue": "Tuesday",
    "wed": "Wednesday",
    "thu": "Thursday",
    "fri": "Friday",
    "sat": "Saturday",
    "sun": "Sunday",
};

//Ordered list of week days
const days = { "Monday": 1, "Tuesday": 2, "Wednesday": 3, "Thursday": 4, "Friday": 5, "Saturday": 6, "Sunday": 7 };

const Hoc = (WrappedComponent) => {
    const WithClinics = props => {
        const [error, setError] = useState();
        const [isLoading, setIsLoading] = useState(false);
        const [clinics, setClinics] = useState([]);

        useEffect(() => {
            handleClinicsRequest();
        }, [])

        const handleClinicsRequest = () => {
            setIsLoading(true);
            setError();
            fetchClinics((error, data) => {
                if (error) setError(error);
                else if (data) {
                    for (let i = 0; i < data.length; i++) {
                        let openingHours = [];
                        for (const [key, value] of Object.entries(data[i].openingHours)) {
                            const { periods, ...rest } = value;
                            for (let j = 0; j < periods.length; j++) {
                                openingHours.push({
                                    day: daysOfWeek[key],
                                    period: millisecondsToString(periods[j].from) + " - " + millisecondsToString(periods[j].to),
                                    allDay: isAllDay(periods[j].from, periods[j].to),
                                    ...rest
                                });
                            }
                        }
                        delete data[i].openingHours;
                        openingHours.sort((a, b) => days[a.day] - days[b.day]);
                        data[i].openingHours = groupBy(openingHours, "period");
                    }
                    setClinics(data);
                }
                setIsLoading(false);
            });
        }

        return (
            <WrappedComponent
                error={error}
                isLoading={isLoading}
                clinics={clinics}
                handleClinicsRetry={() => handleClinicsRequest()}
            />
        )
    }

    return WithClinics;
}

export default Hoc;
import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
    background-color: rgb(215, 237, 233, 0.4);
    padding: 30px;
    margin: 8px 0;
    width: 700px;
    border-radius: 6px;
    border: 1px solid rgb(79, 212, 198);
    box-sizing: border-box;
`;

const ClinicName = styled.strong`
    font-weight: 500;
    font-size: 20px;
    text-transform: capitalize;
`;

const OpeningHours = styled.div`
    font-size: 14px;
    padding: 8px 0 0;
    display: flex;
    align-items: baseline;
`;

const Span = styled.span`
    ${({ closed }) => css`
        color: ${closed ? "rgba(217,48,37,1.0)" : "inherit"};
        text-decoration: ${closed ? "none" : "underline"};
        font-size: 12px;
    `}
`;

const Hours = styled.div`
    margin-left: 5px;
    font-weight: 900;
`;

const ClinicCard = ({
    clinicName,
    openingHours,
    ...props
}) => {
    const renderUI = () => {
        let uiItems = [];
        for (const [key, value] of Object.entries(openingHours)) {
            let days = "";
            let isOpen = false;
            let isAllDay = false;
            for (let i = 0; i < value.length; i++) {
                days += (i === value.length - 1) ? `${value[i].day} : ` : `${value[i].day} - `;
                isOpen = value[i].isOpen;
                isAllDay = value[i].allDay;
            }
            uiItems.push(
                <OpeningHours key={key} closed={true}>
                    <div>{days}</div>
                    <Hours>
                        {!isOpen && <Span closed={true}>Closed</Span>}
                        {(isOpen && isAllDay) && <Span>All day</Span>}
                        {(isOpen && !isAllDay) && <Span>{key}</Span>}
                    </Hours>
                </OpeningHours>
            )
        }

        return uiItems;
    }
    return (
        <Wrapper>
            <ClinicName>{clinicName}</ClinicName>
            {renderUI()}
        </Wrapper>
    )
};

export default ClinicCard;
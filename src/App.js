import React, { useEffect } from "react";
import withClinics, { ClinicCard } from "./components/Clinic";
import {
  GlobalStyle,
  HeaderContainer,
  PageHeader,
  MainContainer,
  ClinicsWrapper,
  H2,
  ClinicsHeader
} from "./components/Layout";
import Button from "./components/Button";
import Logo from "./components/Logo";

const App = ({
  error,
  clinics,
  isLoading,
  handleClinicsRetry,
  ...props
}) => {

  useEffect(() => {
    document.title = "Dr.Dropin | Alle Klinikker"
  })

  return (
    <React.Fragment>
      <HeaderContainer>
        <PageHeader>
          <Logo />
        </PageHeader>
      </HeaderContainer>
      <MainContainer>
        <GlobalStyle />
        {isLoading && <div>Laster innhold ...</div>}
        {
          error ?
            <div>
              Kan ikke få klinikker&nbsp;&nbsp;
              <Button onClick={handleClinicsRetry}>Prøv igjen</Button>
            </div>
            :
            <ClinicsWrapper>
              {
                (clinics.length > 1 && !isLoading) && (
                  <React.Fragment>
                    <ClinicsHeader>
                      <H2>{`Alle Klinikker (${clinics.length})`}</H2>
                      <Button onClick={handleClinicsRetry}>forfriske</Button>
                    </ClinicsHeader>
                    {clinics.map((clinic, i) => (
                      <ClinicCard
                        key={i}
                        clinicName={clinic.name}
                        openingHours={clinic.openingHours}
                      />
                    ))}
                  </React.Fragment>
                )
              }
            </ClinicsWrapper>
        }
      </MainContainer>
    </React.Fragment>
  );
}

export default withClinics(App);

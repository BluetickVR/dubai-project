import React from "react";
import styled from "styled-components";
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';


const PageSelector = () => {
  return (
    <PageSelectorStyle className="flex-center">
      <div className="page-label">earth</div>
      <div className="page-label">dubai</div>
      <div className="page-label">town</div>
    </PageSelectorStyle>
  );
};

const PrevPage = () => {
  return (
    <>
      <SettingsBackupRestoreIcon />
      {/* <FontAwesomeIcon icon="fa-duotone fa-rotate-left" />
      <FontAwesomeIcon icon="fa-thin fa-circle-arrow-left" /> */}
    </>
  );
}


function Navigator(props) {
  return (
    <Style className="flex-center">
      <div className="title">Shobha</div>
      <PrevPage />
      <PageSelector />
      <div className="expand-arrow">arrow</div>
    </Style>
  );
}

export default Navigator;

const Style = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 1rem;
  margin: 1rem;
  position: absolute;
  margin: 1rem;
  border-radius: 6px;
  color: white;
  background-color: var(--clr-primary);
`;

const PageSelectorStyle = styled.div`
  .page-label {
    margin: 0.5rem;
    padding: 0.2rem 0.5rem;
    border-radius: 6px;
    background-color: white;
    color: var(--clr-primary);
  }
`;

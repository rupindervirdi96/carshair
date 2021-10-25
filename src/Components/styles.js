import styled from "styled-components";

const colorSchemes = {
  backgroundOne: "#424242",
  sidebarColor: "#e63946",
};
export const AppStyles = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.2);
  display: grid;
  transition: all 300ms ease-out;
  grid-template-columns: 350px 1fr;
  position: relative;
  background-color: ${colorSchemes.sidebarColor};
  @media (max-width: 800px) {
    display: block;
  }
`;

export const SideBarStyles = styled.div`
  padding: 20px 20px;
  background-color: ${colorSchemes.sidebarColor};
  color: white;
  @media (max-width: 800px) {
    /* transition: all 200ms ease-out; */
    position: absolute;
    height: 100%;
    top: 131px;
    left: 0%;
    width: 100%;
    bottom: 0;
    z-index: 10;

      ${(props) =>
        props.hide
          ? "transform: translateX(-100%);"
          : "transform: translateX(0%);"}
    @media (max-width: 450px) {
      transition: all 200ms ease;
    ${(props) =>
      props.hide
        ? "transform: translateX(-100%);"
        : "transform: translateX(0%);"}
  }
`;

export const DropDownFilterStyles = styled.div`
  margin: 50px 0px;
  width: 100%;
  margin: 0 auto;
`;
export const DropDownStyles = styled.div`
  .form {
    margin: 40px 0px;

    div,
    label,
    input,
    svg {
      color: white;
    }
  }
  fieldSet {
    outline: none;
    border: none;
  }
`;

export const DisplayAreaStyles = styled.div`
  padding: 0px 40px;
  border-left: 0.01px solid rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  background-color: ${colorSchemes.backgroundOne};
  text-align: left;
  height: 100%;
  position: relative;

  @media (max-width: 450px) {
    padding: 0px 0px 10px 0px;
    text-align: center;
  }
  .top-bar {
    position: sticky;
    top: 0;
    z-index: 99;
    padding: 20px 5px 10px 5px;
    background-color: ${colorSchemes.backgroundOne};
  }

  .results-found {
    display: block;
    margin-left: 20px;
    margin-bottom: 10px;
    font-weight: normal;
    color: whitesmoke;
    @media (max-width: 450px) {
      margin-left: 0px;
      margin-bottom: 10px;
    }
    span {
      font-size: 22px;
      font-weight: normal;
    }
  }
`;

export const SearchBarStyles = styled.div`
  margin: 10px auto 5px 15px;
  width: 80%;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  @media (max-width: 800px) {
    display: grid;
    margin: 10px auto 5px auto;
    width: 100%;
    grid-template-columns: 60px 1fr;
  }

  button {
    background-color: #fff;
    border-radius: 4px 0px 0px 4px;
    margin: 0 5px 0px 0px;
    box-shadow: none;
    border: none;
    display: none;
    @media (max-width: 800px) {
      display: inline-block;
    }
    svg {
      color: rgba(0, 0, 0, 0.2);
      height: 30px;
      width: 30px;
    }
  }
  input {
    background-color: #fff;
    width: 100%;
    padding: 15px;
    font-size: 16px;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.6);
    border: none;
    outline: none;
    border-radius: 4px;
    @media (max-width: 800px) {
      border-radius: 0px 4px 4px 0px;
    }
  }
`;

export const ProductCardStyles = styled.div`
  border-radius: 10px;
  min-width: 250px;
  margin: 10px 15px;
  display: inline-block;
  background-color: #6d6875;
  text-align: left;
  transition: all 200ms ease-out;
  grid-template-rows: max-content 1fr 50px;
  .car-image {
    height: 200px;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px 8px 0px 0px;
    ${(props) => `background-image:url('${props.image_url}')`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .details {
    padding: 15px 20px;
    font-size: 13px;
    table tr td:nth-child(1) {
      padding-left: 0px;
      font-size: 11px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.6);
    }
    table tr td {
      color: rgba(255, 255, 255, 1);
      padding: 5px 8px;
      text-transform: capitalize;
      * {
        max-width: 180px;
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 10px;
    border-top: 0.01px solid rgba(0, 0, 0, 0.1);

    svg {
      color: #fff;
      stroke: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
    }

    Button {
      font-size: 13px;
      border: none;
      background-color: none;
      transition: all 200ms ease-out;
      :hover {
        transform: scale(1.1);
      }
      span {
        padding: 0px 5px;
        color: #fff;
        text-transform: capitalize;
        font-weight: normal;
      }
    }
  }
`;

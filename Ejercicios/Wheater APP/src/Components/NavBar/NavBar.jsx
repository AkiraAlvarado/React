// NavBar.js
import { useRef } from "react";

const NavBar = ({ setCity }) => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = inputRef.current.value.trim(); // Trim para evitar espacios innecesarios
    if (city) {
      setCity(city); // Actualizar la ciudad solo si el input no está vacío
    }
  };

  return (
    <>
      <header>
        <div className="header center__item">
          <div>
            <p className="logo">Weather APP</p>
          </div>
          <div>
            <form className="header__container" onSubmit={handleSubmit}>
              <input
                className="header__container__input"
                type="text"
                placeholder="Agregue una ciudad"
                id="city-input"
                ref={inputRef}
              />
              <input
                type="submit"
                className="header__container__button"
                id="obtain-results"
                value="Buscar"
              />
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;

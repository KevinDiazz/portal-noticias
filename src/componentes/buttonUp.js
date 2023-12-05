import '../css/buttonUp-style.css'
import { useEffect, useRef} from 'react';
function ButtonUp() {
  const boton = useRef(null)

useEffect(()=>{
    window.onscroll = function () {
        mostrarOcultarBoton();
    }


  function mostrarOcultarBoton() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      boton.current.style.display = "block";
    } else {
      boton.current.style.display = "none";
    }
  }
return () => {
      window.onscroll = null;
    };
},[])
  // Función para volver al principio de la página
  function volverArriba() {
    document.body.scrollTop = 0; // Para navegadores que no sean Firefox
    document.documentElement.scrollTop = 0; // Para Firefox
  }

  return (
    <button data-testid="btnVolverArriba" id="btnVolverArriba" ref={boton} onClick={volverArriba}>
    <img src={require('../Images/icons/pngegg (10).png')} style={{width:"50px", height:"60px"}} alt='img-arrow'></img>
    </button>
  );
}
export default ButtonUp
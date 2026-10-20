const botones  = document.querySelectorAll('.boton-consultar');

botones.forEach(function(boton) {boton.addEventListener('click', function() {

    const producto = boton.closest('article');
    
    const nombreProducto = producto.querySelector('h4').textContent;
    const mensaje = `Hola estoy interesado en ${nombreProducto}.Quisiera consultar disponibilidad`;

    const telefono = '+54 911 6742-8635'

    alert(`¿Desea enviar un mensaje a WhatsApp sobre ${nombreProducto}?`);

    window.location.href = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`
})

    })



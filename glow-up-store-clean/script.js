// Variables globales
let carrito = [];
let modoEdicion = false;
let editandoTarjeta = null;
let categoriaActual = null;
let subcategoriaActual = null;

// Mapeo de pantallas a categorías
const categoriasMap = {
    'pantalla-labios': 'labios',
    'pantalla-ojos': 'ojos',
    'pantalla-rostro': 'rostro',
    'pantalla-skincare-facial': 'skincare-facial',
    'pantalla-skincare-corporal': 'skincare-corporal',
    'pantalla-capilar-kaba': 'capilar-kaba',
    'pantalla-capilar-ritual-botanico': 'capilar-ritual-botanico',
    'pantalla-capilar-milagros': 'capilar-milagros',
    'pantalla-capilar-click-hair': 'capilar-click-hair',
    'pantalla-capilar-la-posion': 'capilar-la-posion',
    'pantalla-capilar-skala': 'capilar-skala',
    'pantalla-capilar-la-receta': 'capilar-la-receta',
    'pantalla-capilar-lissia': 'capilar-lissia',
    'pantalla-acc-cabello': 'acc-cabello',
    'pantalla-acc-rostro': 'acc-rostro',
    'pantalla-acc-varios': 'acc-varios',
    'pantalla-det-ramos': 'det-ramos',
    'pantalla-det-kits': 'det-kits',
    'pantalla-det-personalizados': 'det-personalizados'
};

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    cargarProductosEnPantallas();
    actualizarCarrito();
    cargarProductosPersonalizados();
});

// Cargar productos en las pantallas correspondientes
function cargarProductosEnPantallas() {
    Object.keys(productos).forEach(categoria => {
        const gridId = `grid-${categoria}`;
        const gridElement = document.getElementById(gridId);
        
        if (gridElement && productos[categoria]) {
            productos[categoria].forEach(producto => {
                gridElement.appendChild(crearTarjetaProducto(producto, categoria));
            });
        }
    });
}

// Crear tarjeta de producto
function crearTarjetaProducto(producto, categoria) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.dataset.id = producto.id;
    tarjeta.onclick = function() { voltearTarjeta(this); };

    tarjeta.innerHTML = `
        <div class="tarjeta-inner">
            <div class="frente">
                <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" onerror="this.style.background='#f0f0f0'">
                <h3>${producto.nombre}</h3>
                <div class="precio">$${producto.precio.toLocaleString('es-CO')} COP</div>
            </div>
            <div class="atras">
                <p><strong>${producto.nombre}</strong></p>
                <p>${producto.descripcion}</p>
                <div style="display: flex; gap: 6px; width: 100%; justify-content: center;">
                    ${modoEdicion ? `
                        <button class="btn-pedir" style="background: #FF9800; flex: 1; font-size: 0.35rem; padding: 3px; margin: 0;" onclick="event.stopPropagation(); editarTarjeta('${producto.nombre.replace(/'/g, "\\'")}', ${producto.precio}, '${producto.imagen.replace(/'/g, "\\'")}', '${producto.descripcion.replace(/'/g, "\\'")}', ${producto.id}, '${categoria}')">✏️ Edit</button>
                        <button class="btn-pedir" style="background: #f44336; flex: 1; font-size: 0.35rem; padding: 3px; margin: 0;" onclick="event.stopPropagation(); eliminarTarjetaOriginal(${producto.id}, '${categoria}')">🗑️ Del</button>
                    ` : `
                        <button class="btn-pedir" onclick="event.stopPropagation(); agregarCarrito('${producto.nombre.replace(/'/g, "\\'")}', ${producto.precio}, '${producto.imagen.replace(/'/g, "\\'")}')">Pedir por WA</button>
                    `}
                </div>
            </div>
        </div>
    `;

    return tarjeta;
}

// Navegación entre pantallas
function irA(seccion) {
    document.querySelectorAll('.seccion').forEach(s => s.classList.remove('visible'));
    const seccionElement = document.getElementById(seccion);
    
    if (seccionElement) {
        seccionElement.classList.add('visible');
        
        // Actualizar categoría actual
        if (categoriasMap[seccion]) {
            subcategoriaActual = categoriasMap[seccion];
            cargarProductosPersonalizadosEnCategoria();
        }
    }
}

// Voltear tarjeta
function voltearTarjeta(element) {
    element.classList.toggle('volteada');
}

// ============================================
// FUNCIONES DEL CARRITO
// ============================================

function agregarCarrito(nombre, precio, imagen) {
    const existente = carrito.find(item => item.nombre === nombre);
    
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({ 
            nombre, 
            precio, 
            cantidad: 1,
            imagen: imagen || 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'40\' fill=\'%23f06292\'/%3E%3C/svg%3E'
        });
    }
    
    actualizarCarrito();
    
    // Feedback visual
    mostrarNotificacion('Producto agregado al carrito');
}

function eliminarDelCarrito(nombre) {
    carrito = carrito.filter(item => item.nombre !== nombre);
    actualizarCarrito();
}

function actualizarCarrito() {
    const contador = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    document.getElementById('contador-carrito').textContent = contador;

    const itemsHTML = carrito.length === 0
        ? '<p class="vacío">Tu carrito está vacío 🛒</p>'
        : carrito.map(item => `
            <div class="item-carrito">
                <img src="${item.imagen}" alt="${item.nombre}" style="width: 50px; height: 50px; object-fit: contain; border-radius: 8px; margin-right: 12px;">
                <div class="item-info">
                    <p><strong>${item.nombre}</strong></p>
                    <p>$${item.precio.toLocaleString('es-CO')} COP x ${item.cantidad}</p>
                    <p style="color: var(--rosa-fuerte); font-weight: 700;">Subtotal: $${(item.precio * item.cantidad).toLocaleString('es-CO')} COP</p>
                </div>
                <button class="btn-eliminar" onclick="eliminarDelCarrito('${item.nombre.replace(/'/g, "\\'")}')">Eliminar</button>
            </div>
        `).join('');

    document.getElementById('items-carrito').innerHTML = itemsHTML;

    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    const totalHTML = carrito.length === 0
        ? ''
        : `<p style="font-size: 1.3rem; color: var(--rosa-fuerte);">Total: $${total.toLocaleString('es-CO')} COP</p>
           <button class="btn-negro" onclick="enviarWhatsApp()">✓ Completar Pedido por WhatsApp</button>`;
    
    document.getElementById('total-carrito').innerHTML = totalHTML;
    
    // Guardar carrito en localStorage
    localStorage.setItem('carrito-glow', JSON.stringify(carrito));
}

function abrirCarrito() {
    document.getElementById('modal-carrito').classList.add('visible');
}

function cerrarCarrito() {
    document.getElementById('modal-carrito').classList.remove('visible');
}

function enviarWhatsApp() {
    if (carrito.length === 0) return;
    
    let mensaje = '🌸 *GLOW UP STORE* 🌸%0A%0A';
    mensaje += '📝 *MI PEDIDO*%0A';
    mensaje += '━━━━━━━━━━━━━━━━%0A%0A';
    
    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        mensaje += `${index + 1}. *${item.nombre}*%0A`;
        mensaje += `   💰 $${item.precio.toLocaleString('es-CO')} COP x ${item.cantidad} = $${subtotal.toLocaleString('es-CO')} COP%0A%0A`;
    });
    
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    mensaje += '━━━━━━━━━━━━━━━━%0A';
    mensaje += `💵 *TOTAL: $${total.toLocaleString('es-CO')} COP*%0A%0A`;
    mensaje += '✨ ¡Gracias por tu compra! ✨';
    
    window.open(`https://wa.me/573222269375?text=${mensaje}`, '_blank');
}

// ============================================
// FUNCIONES DE EXPORTACIÓN
// ============================================

function exportarProductos() {
    try {
        // Obtener productos de localStorage
        const productosLocalStorage = JSON.parse(localStorage.getItem('productos-glow') || '[]');
        
        console.log('Productos en localStorage:', productosLocalStorage);
        console.log('Cantidad de productos en localStorage:', productosLocalStorage.length);
        
        // Verificar si hay productos en localStorage
        if (productosLocalStorage.length === 0) {
            alert('⚠️ No hay productos agregados por el panel de administración.\n\nLos productos que ves son los originales del archivo productos.js.');
            return;
        }
        
        // Generar código SOLO con los productos del localStorage
        let codigo = `// Productos agregados por el panel de administración\n// AGREGA ESTOS PRODUCTOS AL ARCHIVO productos.js\n\n`;
        
        // Agrupar por categoría
        const productosPorCategoria = {};
        productosLocalStorage.forEach(prod => {
            const categoria = prod.categoria || 'labios';
            if (!productosPorCategoria[categoria]) {
                productosPorCategoria[categoria] = [];
            }
            productosPorCategoria[categoria].push(prod);
        });
        
        // Generar código por categoría
        for (const categoria in productosPorCategoria) {
            codigo += `// Categoría: ${categoria}\n`;
            codigo += `productos.${categoria}.push(\n`;
            productosPorCategoria[categoria].forEach(prod => {
                codigo += `    {\n`;
                codigo += `        id: ${prod.id},\n`;
                codigo += `        nombre: "${prod.nombre}",\n`;
                codigo += `        precio: ${prod.precio},\n`;
                codigo += `        imagen: "${prod.imagen}",\n`;
                codigo += `        descripcion: "${prod.descripcion}"\n`;
                codigo += `    },\n`;
            });
            codigo += `);\n\n`;
        }
        
        console.log('Código generado correctamente');
        
        // Crear ventana modal con el código
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        `;
        
        const contenido = document.createElement('div');
        contenido.style.cssText = `
            background: white;
            padding: 30px;
            border-radius: 15px;
            max-width: 90%;
            max-height: 90%;
            overflow: auto;
            width: 700px;
        `;
        
        contenido.innerHTML = `
            <h2 style="margin-top: 0; color: #e91e63;">📤 Exportar Productos Nuevos</h2>
            <p style="margin-bottom: 15px;">Copia este código y agrégalo al final de cada categoría en el archivo <strong>productos.js</strong>:</p>
            <textarea id="codigo-exportar" style="width: 100%; height: 400px; font-family: monospace; font-size: 12px; padding: 15px; border: 2px solid #e0e0e0; border-radius: 10px;">${codigo}</textarea>
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button onclick="copiarCodigo()" style="flex: 1; padding: 15px; background: #4CAF50; color: white; border: none; border-radius: 10px; font-size: 16px; font-weight: bold; cursor: pointer;">📋 Copiar Código</button>
                <button onclick="cerrarModalExportar()" style="flex: 1; padding: 15px; background: #f44336; color: white; border: none; border-radius: 10px; font-size: 16px; font-weight: bold; cursor: pointer;">✕ Cerrar</button>
            </div>
        `;
        
        modal.appendChild(contenido);
        document.body.appendChild(modal);
        
        window.modalExportar = modal;
    } catch (error) {
        console.error('Error al exportar productos:', error);
        alert('❌ Error al exportar productos:\n\n' + error.message + '\n\nPor favor abre la consola (F12) para más detalles.');
    }
}

function copiarCodigo() {
    const textarea = document.getElementById('codigo-exportar');
    textarea.select();
    document.execCommand('copy');
    alert('✅ Código copiado al portapapeles');
}

function cerrarModalExportar() {
    if (window.modalExportar) {
        document.body.removeChild(window.modalExportar);
        window.modalExportar = null;
    }
}

// ============================================
// FUNCIONES DE EDICIÓN
// ============================================

function toggleModoEdicion() {
    modoEdicion = !modoEdicion;

    if (modoEdicion) {
        document.getElementById('modal-editar').classList.add('visible');
        limpiarFormulario();
    } else {
        document.getElementById('modal-editar').classList.remove('visible');
    }

    // Recargar todas las tarjetas para actualizar botones
    // Limpiar todos los grids
    document.querySelectorAll('.grid').forEach(grid => {
        grid.innerHTML = '';
    });
    // Recargar productos originales
    cargarProductosEnPantallas();
    // Recargar productos personalizados
    cargarProductosPersonalizadosEnCategoria();
}

function cerrarEdicion() {
    modoEdicion = false;
    document.getElementById('modal-editar').classList.remove('visible');
    editandoTarjeta = null;
    limpiarFormulario();
    categoriaActual = null;
    subcategoriaActual = null;
}

function limpiarFormulario() {
    document.getElementById('edit-nombre').value = '';
    document.getElementById('edit-precio').value = '';
    document.getElementById('edit-imagen').value = '';
    document.getElementById('edit-descripcion').value = '';
    document.getElementById('edit-categoria').value = '';
    editandoTarjeta = null;
}

function agregarTarjeta() {
    const nombre = document.getElementById('edit-nombre').value.trim();
    const precioStr = document.getElementById('edit-precio').value.trim();
    const imagen = document.getElementById('edit-imagen').value.trim();
    const descripcion = document.getElementById('edit-descripcion').value.trim();
    const categoria = document.getElementById('edit-categoria').value;

    if (!nombre || !precioStr || !imagen || !descripcion || !categoria) {
        alert('Por favor completa todos los campos correctamente y selecciona una categoría 📝');
        return;
    }

    const precio = parseFloat(precioStr);
    if (isNaN(precio) || precio <= 0) {
        alert('El precio debe ser un número válido mayor a 0');
        return;
    }

    if (!imagen.startsWith('http')) {
        alert('La URL de la imagen debe comenzar con https:// o http://');
        return;
    }

    const nuevaTarjeta = {
        id: Date.now(),
        nombre,
        precio: precio,
        imagen,
        descripcion,
        categoria: categoria
    };

    let productosPersonalizados = JSON.parse(localStorage.getItem('productos-glow')) || [];
    productosPersonalizados.push(nuevaTarjeta);
    localStorage.setItem('productos-glow', JSON.stringify(productosPersonalizados));

    alert('✅ Producto agregado exitosamente!');
    limpiarFormulario();
    
    setTimeout(() => {
        cargarProductosPersonalizadosEnCategoria();
        document.getElementById('modal-editar').classList.remove('visible');
        modoEdicion = false;
    }, 100);
}

function guardarEdicion() {
    const nombre = document.getElementById('edit-nombre').value.trim();
    const precioStr = document.getElementById('edit-precio').value.trim();
    const imagen = document.getElementById('edit-imagen').value.trim();
    const descripcion = document.getElementById('edit-descripcion').value.trim();
    const categoria = document.getElementById('edit-categoria').value;

    if (!nombre || !precioStr || !imagen || !descripcion) {
        alert('Por favor completa todos los campos correctamente 📝');
        return;
    }

    // Eliminar puntos y comas antes de convertir a número
    const precioLimpio = precioStr.replace(/[.,]/g, '');
    const precio = parseFloat(precioLimpio);
    if (isNaN(precio) || precio <= 0) {
        alert('El precio debe ser un número válido mayor a 0');
        return;
    }

    if (!imagen.startsWith('http')) {
        alert('La URL de la imagen debe comenzar con https:// o http://');
        return;
    }

    if (editandoTarjeta) {
        let productosPersonalizados = JSON.parse(localStorage.getItem('productos-glow')) || [];
        productosPersonalizados = productosPersonalizados.map(p =>
            p.id === editandoTarjeta.id
                ? { ...p, nombre, precio, imagen, descripcion, categoria: categoria || p.categoria }
                : p
        );
        localStorage.setItem('productos-glow', JSON.stringify(productosPersonalizados));
        alert('✅ Producto actualizado!');
        limpiarFormulario();
        cargarProductosPersonalizadosEnCategoria();
    } else {
        agregarTarjeta();
    }
}

function editarTarjeta(nombre, precio, imagen, descripcion, id, categoria) {
    editandoTarjeta = { id, nombre, precio, imagen, descripcion, categoria };
    document.getElementById('edit-nombre').value = nombre;
    document.getElementById('edit-precio').value = precio;
    document.getElementById('edit-imagen').value = imagen;
    document.getElementById('edit-descripcion').value = descripcion;
    document.getElementById('edit-categoria').value = categoria || '';
    document.getElementById('modal-editar').classList.add('visible');
}

function eliminarTarjeta(id) {
    if (confirm('¿Eliminar este producto?')) {
        let productosPersonalizados = JSON.parse(localStorage.getItem('productos-glow')) || [];
        productosPersonalizados = productosPersonalizados.filter(p => p.id !== id);
        localStorage.setItem('productos-glow', JSON.stringify(productosPersonalizados));
        alert('✅ Producto eliminado');
        cargarProductosPersonalizadosEnCategoria();
    }
}

function eliminarTarjetaOriginal(id, categoria) {
    if (!confirm('¿Estás seguro de que quieres eliminar este producto? Esta acción no se puede deshacer.')) {
        return;
    }

    // Eliminar del array productos
    if (productos[categoria]) {
        productos[categoria] = productos[categoria].filter(p => p.id !== id);
    }

    // Recargar la categoría
    const gridElement = document.getElementById(`grid-${categoria}`);
    if (gridElement) {
        gridElement.innerHTML = '';
        productos[categoria].forEach(producto => {
            const tarjeta = crearTarjetaProducto(producto, categoria);
            gridElement.appendChild(tarjeta);
        });
    }

    alert('✅ Producto eliminado');
}

// ============================================
// PRODUCTOS PERSONALIZADOS
// ============================================

function cargarProductosPersonalizados() {
    // Cargar productos adicionales de localStorage
    const productosPersonalizados = JSON.parse(localStorage.getItem('productos-glow')) || [];
    
    // Cargar carrito guardado
    const carritoGuardado = localStorage.getItem('carrito-glow');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarCarrito();
    }
}

function cargarProductosPersonalizadosEnCategoria() {
    const productosPersonalizados = JSON.parse(localStorage.getItem('productos-glow')) || [];
    
    if (!subcategoriaActual) return;
    
    const gridId = `grid-${subcategoriaActual}`;
    const gridElement = document.getElementById(gridId);
    
    if (!gridElement) return;
    
    // Eliminar productos personalizados previos
    const productosCustom = gridElement.querySelectorAll('[data-custom="true"]');
    productosCustom.forEach(el => el.remove());
    
    // Filtrar productos de esta categoría
    const productosCategoria = productosPersonalizados.filter(p => p.categoria === subcategoriaActual);
    
    productosCategoria.forEach(producto => {
        const tarjeta = crearTarjetaProductoPersonalizado(producto);
        gridElement.appendChild(tarjeta);
    });
}

function crearTarjetaProductoPersonalizado(producto) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.dataset.id = producto.id;
    tarjeta.dataset.custom = 'true';
    tarjeta.onclick = function() { voltearTarjeta(this); };

    // Asegurar que el precio sea un número
    const precioNumerico = typeof producto.precio === 'string' ? parseFloat(producto.precio.replace(/[.,]/g, '')) : producto.precio;

    tarjeta.innerHTML = `
        <div class="tarjeta-inner">
            <div class="frente">
                <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" onerror="this.style.background='#f0f0f0'">
                <h3>${producto.nombre}</h3>
                <div class="precio">$${precioNumerico.toLocaleString('es-CO')} COP</div>
            </div>
            <div class="atras">
                <p><strong>${producto.nombre}</strong></p>
                <p>${producto.descripcion}</p>
                <div style="display: flex; gap: 6px; width: 100%; justify-content: center;">
                    ${modoEdicion ? `
                        <button class="btn-pedir" style="background: #FF9800; flex: 1; font-size: 0.35rem; padding: 3px; margin: 0;" onclick="event.stopPropagation(); editarTarjeta('${producto.nombre.replace(/'/g, "\\'")}', ${precioNumerico}, '${producto.imagen.replace(/'/g, "\\'")}', '${producto.descripcion.replace(/'/g, "\\'")}', ${producto.id}, '${producto.categoria || ''}')">✏️ Edit</button>
                        <button class="btn-pedir" style="background: #f44336; flex: 1; font-size: 0.35rem; padding: 3px; margin: 0;" onclick="event.stopPropagation(); eliminarTarjeta(${producto.id})">🗑️ Del</button>
                    ` : `
                        <button class="btn-pedir" onclick="event.stopPropagation(); agregarCarrito('${producto.nombre.replace(/'/g, "\\'")}', ${precioNumerico}, '${producto.imagen.replace(/'/g, "\\'")}')">Pedir por WA</button>
                    `}
                </div>
            </div>
        </div>
    `;

    return tarjeta;
}

// ============================================
// UTILIDADES
// ============================================

function mostrarNotificacion(mensaje) {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        background: var(--verde-ws);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1001;
        animation: slideIn 0.3s ease;
        font-size: 0.9rem;
        font-weight: 600;
    `;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    // Eliminar después de 2 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notificacion.remove(), 300);
    }, 2000);
}

// Agregar animaciones CSS para notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

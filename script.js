document.addEventListener('DOMContentLoaded', function() {
    // Elementos del formulario
    const form = document.getElementById('registroForm');
    const submitBtn = document.getElementById('submitBtn');
    
    // Campos del formulario
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const terminosCheckbox = document.getElementById('terminos');
    
    // Expresiones regulares para validación
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    
    // Función para añadir efectos visuales al enfoque
    function setupFocusEffects() {
        const allInputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], input[type="date"]');
        
        allInputs.forEach(input => {
            // Manejar enfoque
            input.addEventListener('focus', function() {
                const iconElement = this.previousElementSibling;
                if (iconElement && iconElement.tagName === 'I') {
                    iconElement.style.color = '#2ecc71';
                }
            });
            
            // Manejar desenfoque
            input.addEventListener('blur', function() {
                const iconElement = this.previousElementSibling;
                if (iconElement && iconElement.tagName === 'I') {
                    iconElement.style.color = '#888';
                }
            });
        });
    }
    
    // Función para mostrar mensajes de error
    function showError(input, errorElement) {
        const error = document.querySelector(`[data-error="${errorElement}"]`);
        if (error) {
            error.style.display = 'block';
            
            // Animación de aparición del error
            error.style.opacity = '0';
            error.style.transform = 'translateY(-10px)';
            error.style.transition = 'opacity 0.3s, transform 0.3s';
            
            setTimeout(() => {
                error.style.opacity = '1';
                error.style.transform = 'translateY(0)';
            }, 10);
        }
        input.classList.add('error');
    }
    
    // Función para ocultar mensajes de error
    function hideError(input, errorElement) {
        const error = document.querySelector(`[data-error="${errorElement}"]`);
        if (error) {
            error.style.display = 'none';
        }
        input.classList.remove('error');
    }
    
    // Validar nombre
    nombreInput.addEventListener('blur', function() {
        if (!nombreInput.value.trim()) {
            showError(nombreInput, 'nombre');
        } else {
            hideError(nombreInput, 'nombre');
        }
        validateForm();
    });
    
    // Validar email
    emailInput.addEventListener('blur', function() {
        if (!emailInput.value.trim()) {
            showError(emailInput, 'email');
        } else if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, 'email');
        } else {
            hideError(emailInput, 'email');
        }
        validateForm();
    });
    
    // Validar contraseña
    passwordInput.addEventListener('blur', function() {
        if (!passwordInput.value) {
            showError(passwordInput, 'password');
        } else if (!passwordRegex.test(passwordInput.value)) {
            showError(passwordInput, 'password');
        } else {
            hideError(passwordInput, 'password');
        }
        
        // Re-validar confirmación si ya tiene contenido
        if (confirmPasswordInput.value) {
            validatePasswordMatch();
        }
        validateForm();
    });
    
    // Validar confirmación de contraseña
    confirmPasswordInput.addEventListener('blur', function() {
        validatePasswordMatch();
        validateForm();
    });
    
    function validatePasswordMatch() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, 'confirmPassword');
        } else {
            hideError(confirmPasswordInput, 'confirmPassword');
        }
    }
    
    // Validar términos y condiciones
    terminosCheckbox.addEventListener('change', function() {
        if (!terminosCheckbox.checked) {
            showError(terminosCheckbox, 'terminos');
        } else {
            hideError(terminosCheckbox, 'terminos');
        }
        validateForm();
    });
    
    // Validar el formulario completo
    function validateForm() {
        // Verificar si hay errores en el formulario
        const isNombreValid = nombreInput.value.trim() !== '';
        const isEmailValid = emailRegex.test(emailInput.value);
        const isPasswordValid = passwordRegex.test(passwordInput.value);
        const isPasswordMatch = passwordInput.value === confirmPasswordInput.value;
        const isTerminosChecked = terminosCheckbox.checked;
        
        // Habilitar o deshabilitar el botón de envío
        submitBtn.disabled = !(isNombreValid && isEmailValid && isPasswordValid && isPasswordMatch && isTerminosChecked);
    }
    // Validar al enviar el formulario
    form.addEventListener('submit', function(event) {
        // Validar todos los campos obligatorios
        if (!nombreInput.value.trim()) {
            showError(nombreInput, 'nombre');
            event.preventDefault();
        }
        
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
            showError(emailInput, 'email');
            event.preventDefault();
        }
        
        if (!passwordRegex.test(passwordInput.value)) {
            showError(passwordInput, 'password');
            event.preventDefault();
        }
        
        if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, 'confirmPassword');
            event.preventDefault();
        }
        
        if (!terminosCheckbox.checked) {
            showError(terminosCheckbox, 'terminos');
            event.preventDefault();
        }
    });

    validateForm();

});
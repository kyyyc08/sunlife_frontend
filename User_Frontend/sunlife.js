//script for only 1 purpose can be selected
        const reinstatementCheckbox = document.getElementById('reinstatement');
        const deliveryCheckbox = document.getElementById('delivery');
        const changeCheckbox = document.getElementById('change');
    
        reinstatementCheckbox.addEventListener('change', function() {
            // If reinstatement checkbox is checked, uncheck others
            if (this.checked) {
                deliveryCheckbox.checked = false;
                changeCheckbox.checked = false;
            }
        });
    
        deliveryCheckbox.addEventListener('change', function() {
            // If delivery checkbox is checked, uncheck others
            if (this.checked) {
                reinstatementCheckbox.checked = false;
                changeCheckbox.checked = false;
            }
        });
    
        changeCheckbox.addEventListener('change', function() {
            // If change checkbox is checked, uncheck others
            if (this.checked) {
                reinstatementCheckbox.checked = false;
                deliveryCheckbox.checked = false;
            }
        });


//script for sex
        const maleCheckbox = document.getElementById('maleCheckbox');
        const femaleCheckbox = document.getElementById('femaleCheckbox');


        maleCheckbox.addEventListener('change', function() {
        if (this.checked) {
        femaleCheckbox.checked = false; // Uncheck female if male is checked
                }
                });

        femaleCheckbox.addEventListener('change', function() {
        if (this.checked) {
        maleCheckbox.checked = false; // Uncheck male if female is checked
            }
        });
                                    

//script for permanent address inheritance and extras
        const permInput = document.getElementById('permanent1');
        const sameCheckbox = document.getElementById('same1');
        const presInput = document.getElementById('present1');
    
        function copyPermanentAddress() {
            if (sameCheckbox.checked) {
                presInput.value = permInput.value;
                presInput.disabled = true;
            } else {
                presInput.value = '';
                presInput.disabled = false;
            }
        }
    
        function disableResidenceAddressCheckbox() {
            sameCheckbox.disabled = true;
        }
    
        disableResidenceAddressCheckbox();
    
        sameCheckbox.addEventListener('change', copyPermanentAddress);
 

//script for intention to reside checkboxes
        const intentionyes = document.getElementById('intentionyes');
        const intentionno = document.getElementById('intentionno');


        intentionyes.addEventListener('change', function() {
        if (this.checked) {
        intentionno.checked = false; // Uncheck female if male is checked
            }
                });

        intentionno.addEventListener('change', function() {
        if (this.checked) {
        intentionyes.checked = false; // Uncheck male if female is checked
        }
        });


//script for have you changed checkboxes
        const haveyouyes = document.getElementById('haveyouyes');
        const haveyono = document.getElementById('haveyouno');


        haveyouyes.addEventListener('change', function() {
        if (this.checked) {
        haveyouno.checked = false; // Uncheck female if male is checked
            }
                });

        haveyouno.addEventListener('change', function() {
        if (this.checked) {
        haveyouyes.checked = false; // Uncheck male if female is checked
        }
        });


//script for medical y_n section
        const medicalYesCheckbox = document.getElementById('Medical_Y');
        const medicalNoCheckbox = document.getElementById('Medical_N');

        medicalYesCheckbox.addEventListener('change', () => {
            if (medicalYesCheckbox.checked) {
                medicalNoCheckbox.checked = false;
                enableProductFields();
            }
        });

        medicalNoCheckbox.addEventListener('change', () => {
            if (medicalNoCheckbox.checked) {
                medicalYesCheckbox.checked = false;
                disableAndClearProductFields();
            }
        });

        function disableAndCheckNo() {
            // Disable all checkboxes
            medicalYesCheckbox.disabled = true;
            medicalNoCheckbox.disabled = true;

            // Check the "NO" checkbox as default
            medicalNoCheckbox.checked = true;
            medicalYesCheckbox.checked = false;
        }

        disableAndCheckNo();

        // Function to disable and clear product-related fields
        function disableAndClearProductFields() {
            const productFields = document.querySelectorAll('.product_box, .quantity_per_day_box, .frequency_use_box, .date_last_used_box');
            productFields.forEach(field => {
                field.disabled = true;
                field.value = ''; // Clear the value of the field
            });

            const minusButtons = document.querySelectorAll('.minus');
            minusButtons.forEach(button => {
                button.disabled = true;
            });

            const addButton = document.querySelector('.add');
            addButton.disabled = true;
        }

        // Function to enable product-related fields
        function enableProductFields() {
            const productFields = document.querySelectorAll('.product_box, .quantity_per_day_box, .frequency_use_box, .date_last_used_box');
            productFields.forEach(field => {
                field.disabled = false;
            });

            const minusButtons = document.querySelectorAll('.minus');
            minusButtons.forEach(button => {
                button.disabled = false;
            });

            const addButton = document.querySelector('.add');
            addButton.disabled = false;
        }



//script for edit and save basic functionality
        // Function to disable all elements of a specific type
        function disableElementsByType(type) {
            const elements = document.querySelectorAll(`[type="${type}"]`);
            elements.forEach(element => {
                element.disabled = true;
            });
        }

        // Function to disable all elements of a specific tag and class
        function disableElementsByTagAndClass(tag, className) {
            const elements = document.querySelectorAll(`${tag}.${className}`);
            elements.forEach(element => {
                element.disabled = true;
            });
        }

        // Function to enable all elements of a specific type
        function enableElementsByType(type) {
            const elements = document.querySelectorAll(`[type="${type}"]`);
            elements.forEach(element => {
                element.disabled = false;
            });
        }

        // Function to enable all elements of a specific tag and class
        function enableElementsByTagAndClass(tag, className) {
            const elements = document.querySelectorAll(`${tag}.${className}`);
            elements.forEach(element => {
                element.disabled = false;
            });
        }

        // Disable all relevant inputs initially
        disableElementsByType('text');
        disableElementsByType('date');
        disableElementsByType('checkbox');
        disableElementsByType('number');
        disableElementsByTagAndClass('select', 'frequency_use_box');


        function enableEditMode() {
        enableElementsByType('text');
        enableElementsByType('date');
        enableElementsByType('checkbox');
        enableElementsByType('number');
        enableElementsByTagAndClass('select', 'frequency_use_box');
        
        const editButton = document.querySelector('.button1');
        editButton.disabled = true;
        editButton.classList.add('disabled');
        
        const saveButton = document.querySelector('.button2');
        saveButton.disabled = false;
        saveButton.classList.remove('disabled');
        saveButton.classList.add('enabled'); // Add the 'enabled' class
        }

        function saveChanges() {
        // Disable all relevant inputs
        disableElementsByType('text');
        disableElementsByType('date');
        disableElementsByType('checkbox');
        disableElementsByType('number');
        disableElementsByTagAndClass('select', 'frequency_use_box');
        
        const editButton = document.querySelector('.button1');
        editButton.disabled = false;
        editButton.classList.remove('disabled');
        
        const saveButton = document.querySelector('.button2');
        saveButton.disabled = true;
        saveButton.classList.remove('enabled'); // Remove the 'enabled' class
        saveButton.classList.add('disabled');
        }



// ! for bill.html
let pen_bill = document.getElementById("pen_bill");
let pen_bill_conatiner = document.getElementById("pen_bill_conatiner");
let his = document.getElementById("his");
let his_data = document.querySelector("#his_data");
let st = document.querySelector("#status");
let st_data = document.querySelector("#st_data")

function pen(){
    pen_bill_conatiner.classList.remove("hidden");
    pen_bill_conatiner.classList.add("block");
    his_data.classList.remove("block");
    his_data.classList.add("hidden");
    st_data.classList.remove("block");
    st_data.classList.add("hidden");
    pen_bill.classList.remove("border-[#cdcdcd]");
    pen_bill.classList.add("border-[#bf9853]");
    his.classList.remove("border-[#bf9853]");
    his.classList.add("border-[#cdcdcd]");
    st.classList.remove("border-[#bf9853]");
    st.classList.add("border-[#cdcdcd]");
}

function His(){
    his_data.classList.remove("hidden");
    his_data.classList.add("block");
    pen_bill_conatiner.classList.remove("block");
    pen_bill_conatiner.classList.add("hidden");
    st_data.classList.remove("block");
    st_data.classList.add("hidden");
    pen_bill.classList.remove("border-[#bf9853]");
    pen_bill.classList.add("border-[#cdcdcd]");
    his.classList.remove("border-[#cdcdcd]");
    his.classList.add("border-[#bf9853]");
    st.classList.remove("border-[#bf9853]");
    st.classList.add("border-[#cdcdcd]");
}

function status(){
    st_data.classList.remove("hidden");
    st_data.classList.add("block");
    his_data.classList.add("hidden");
    his_data.classList.remove("block");
    pen_bill_conatiner.classList.remove("block");
    pen_bill_conatiner.classList.add("hidden");
    pen_bill.classList.remove("border-[#bf9853]");
    pen_bill.classList.add("border-[#cdcdcd]");
    his.classList.remove("border-[#bf9853]");
    his.classList.add("border-[#cdcdcd]");
    st.classList.remove("border-[#cdcdcd]");
    st.classList.add("border-[#bf9853]");
}

// Verify, paid entry logic
document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('table');
    
    table.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
            const button = e.target;
            
            if (button.textContent.includes('Verify') || button.textContent.includes('To Pay')) {
                toggleButtonState(button, button.textContent.includes('Verify') ? 'Verified' : 'Paid');
            } else if (button.textContent === 'Entry') {
                // Open the Bootstrap modal
                const modal = new bootstrap.Modal(document.getElementById('Entry'));
                modal.show();
                
                // Add event listener to the Confirm button in the modal
                document.querySelector('#Entry .btn-confirm').addEventListener('click', function() {
                    toggleButtonState(button, 'Entered');
                    modal.hide();
                });
            } else if (button.textContent === 'Entered') {
                // If already entered, open modal again
                const modal = new bootstrap.Modal(document.getElementById('Entry'));
                modal.show();
            }
        }
    });
});

function toggleButtonState(button, text) {
    if (button.textContent === text) {
        button.textContent = text.replace('ed', '');
        button.classList.remove('selected');
        button.style.backgroundColor = '';
        button.style.color = '';
    } else {
        button.innerHTML = `<span class="tick mr-1">✓</span>${text}`;
        button.classList.add('selected');
        button.style.backgroundColor = '#70ff6b';
        button.style.color = '#000';
    }
}
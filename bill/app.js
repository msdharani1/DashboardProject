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

    pen_bill.classList.add("font-semibold");
    his.classList.remove("font-semibold");
    st.classList.remove("font-semibold");
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

    pen_bill.classList.remove("font-semibold");
    his.classList.add("font-semibold");
    st.classList.remove("font-semibold");
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

    pen_bill.classList.remove("font-semibold");
    his.classList.remove("font-semibold");
    st.classList.add("font-semibold");
}

document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('table');
    const verifyModal = new bootstrap.Modal(document.getElementById('verifyModal'));
    const billNumbers = document.getElementById('billNumbers');
    const submitVerify = document.getElementById('submitVerify');
    let currentVerifyButton = null;
    
    // Add custom styles
    const style = document.createElement('style');
    style.textContent = `
        .btn-custom {
            background-color: #bf9853;
            color: white;
        }
        .btn-custom:hover {
            background-color: #d6b17d;
        }
        .btn-outline-custom {
            color: #bf9853;
            border-color: #bf9853;
        }
        .btn-outline-custom:hover {
            background-color: #bf9853;
            color: white;
        }
        .bill-number {
            border: 1px solid #bf9853;
            color: #bf9853;
        }
        .bill-number:hover, .bill-number.active {
            background-color: #bf9853;
            color: white;
        }
    `;
    document.head.appendChild(style);
    
    table.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
            const button = e.target;
            
            if (button.textContent.includes('Verify')) {
                currentVerifyButton = button;
                verifyModal.show();
            } else if (button.textContent.includes('To Pay')) {
                toggleButtonState(button, 'Paid');
            } else if (button.textContent === 'Entry') {
                const modal = new bootstrap.Modal(document.getElementById('Entry'));
                modal.show();
                
                document.querySelector('#Entry .btn-confirm').addEventListener('click', function() {
                    toggleButtonState(button, 'Entered');
                    modal.hide();
                });
            } else if (button.textContent === 'Entered') {
                const modal = new bootstrap.Modal(document.getElementById('Entry'));
                modal.show();
            }
        }
    });

    billNumbers.addEventListener('click', function(e) {
        if (e.target.classList.contains('bill-number')) {
            e.target.classList.toggle('active');
        }
    });

    submitVerify.addEventListener('click', function() {
        if (currentVerifyButton) {
            toggleButtonState(currentVerifyButton, 'Verified');
            verifyModal.hide();
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
        button.style.backgroundColor = 'green';
        button.style.color = '#fff';
    }
}
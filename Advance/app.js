// ! for index.html
let view = document.getElementById("view");
let v_form = document.getElementById("v_form");
let t = document.querySelector("#table");
let t_data = document.getElementById("t_data");
let pdf = document.getElementById("pdf")
let xl=document.getElementById("xl")
let print_ =document.getElementById("print")
let pdf_l = document.getElementById("pdf_l")
let xl_l=document.getElementById("xl_l")
let print_l =document.getElementById("print_l")

function table(){
    v_form.className = "hidden";
    t.classList.remove("border-[#cdcdcd]");
    t.classList.add("border-[#bf9853]");
    view.classList.add("ml-2" ,"mr-2", "font-semibold","border-b-2", "border-[#cdcdcd]", "cursor-pointer");
    t_data.className='';
    t_data.classList.add("w-[100%]", "ml-3", "bg-white", "block");
    pdf.classList.remove("hidden");
    pdf.classList.add("inline-block");
    xl.classList.remove("hidden");
    xl.classList.add("inline-block");
    print_.classList.remove("hidden");
    print_.classList.add("inline-block");
    pdf_l.classList.remove("hidden");
    pdf_l.classList.add("inline-block");
    xl_l.classList.remove("hidden");
    xl_l.classList.add("inline-block");
    print_l.classList.remove("hidden");
    print_l.classList.add("inline-block");
}

function form(){
    t_data.className = "hidden";
    v_form.className="";
    v_form.classList.add("w-[50%]", "ml-3", "bg-white", "flex");
    view.classList.remove("border-[#cdcdcd]");
    view.classList.add("border-[#bf9853]");
    t.classList.add("ml-2" ,"mr-2", "font-semibold", "border-b-2", "border-[#cdcdcd]", "cursor-pointer");
    pdf.classList.remove("inline-block");
    pdf.classList.add("hidden");
    xl.classList.remove("inline-block");
    xl.classList.add("hidden");
    print_.classList.remove("inline-block");
    print_.classList.add("hidden");
    pdf_l.classList.remove("inline-block");
    pdf_l.classList.add("hidden");
    xl_l.classList.remove("inline-block");
    xl_l.classList.add("hidden");
    print_l.classList.remove("inline-block");
    print_l.classList.add("hidden");
}


// ! for advance.html
let adv_conatiner = document.getElementById("adv_conatiner");
let adv = document.getElementById("adv");
let advtable = document.getElementById("adv_table");
let adv_database = document.querySelector("#adv_database");
let adv_table_data = document.querySelector("#adv_table_data");
let adv_database_data = document.querySelector("#adv_database_data")
let adv_pdf = document.getElementById("adv_pdf")
let adv_xl=document.getElementById("adv_xl")
let adv_print_ =document.getElementById("adv_print")
let adv_pdf_l = document.getElementById("adv_pdf_l")
let adv_xl_l=document.getElementById("adv_xl_l")
let adv_print_l =document.getElementById("adv_print_l")

function advance(){
    adv_conatiner.classList.remove("hidden");
    adv_conatiner.classList.add("block");
    adv_table_data.classList.add("hidden");
    adv_database_data.classList.remove("block");
    adv_database_data.classList.add("hidden");
    adv.classList.remove("border-[#cdcdcd]");
    adv.classList.add("border-[#bf9853]");
    advtable.classList.remove("border-[#bf9853]");
    advtable.classList.add("border-[#cdcdcd]");
    adv_database.classList.remove("border-[#bf9853]");
    adv_database.classList.add("border-[#cdcdcd]");
    adv_pdf.classList.add("hidden");
    adv_pdf.classList.remove("inline-block");
    adv_xl.classList.remove("inline-block");
    adv_xl.classList.add("hidden");
    adv_print_.classList.remove("inline-block");
    adv_print_.classList.add("hidden");
    adv_pdf_l.classList.remove("inline-block");
    adv_pdf_l.classList.add("hidden");
    adv_xl_l.classList.remove("inline-block");
    adv_xl_l.classList.add("hidden");
    adv_print_l.classList.remove("inline-block");
    adv_print_l.classList.add("hidden");

    adv.classList.add("font-semibold");
    advtable.classList.remove("font-semibold")
    adv_database.classList.remove("font-semibold");
}

function adv_table(){
    adv_table_data.classList.remove("hidden");
    adv_table_data.classList.add("block");
    adv_conatiner.classList.remove("block");
    adv_conatiner.classList.add("hidden");
    adv_database_data.classList.remove("block");
    adv_database_data.classList.add("hidden");
    adv.classList.add("border-[#cdcdcd]");
    adv.classList.remove("border-[#bf9853]");
    advtable.classList.add("border-[#bf9853]");
    advtable.classList.remove("border-[#cdcdcd]");
    adv_database.classList.remove("border-[#bf9853]");
    adv_database.classList.add("border-[#cdcdcd]");
    adv_pdf.classList.remove("hidden");
    adv_pdf.classList.add("inline-block");
    adv_xl.classList.remove("hidden");
    adv_xl.classList.add("inline-block");
    adv_print_.classList.remove("hidden");
    adv_print_.classList.add("inline-block");
    adv_pdf_l.classList.remove("hidden");
    adv_pdf_l.classList.add("inline-block");
    adv_xl_l.classList.remove("hidden");
    adv_xl_l.classList.add("inline-block");
    adv_print_l.classList.remove("hidden");
    adv_print_l.classList.add("inline-block");

    adv.classList.remove("font-semibold");
    advtable.classList.add("font-semibold")
    adv_database.classList.remove("font-semibold");
}

function adv_data(){
    adv_database_data.classList.remove("hidden");
    adv_database_data.classList.add("block");
    adv_conatiner.classList.remove("block");
    adv_conatiner.classList.add("hidden");
    adv_table_data.classList.remove("block");
    adv_table_data.classList.add("hidden");
    adv.classList.add("border-[#cdcdcd]");
    adv.classList.remove("border-[#bf9853]");
    advtable.classList.remove("border-[#bf9853]");
    advtable.classList.add("border-[#cdcdcd]");
    adv_database.classList.add("border-[#bf9853]");
    adv_database.classList.remove("border-[#cdcdcd]");
    adv_pdf.classList.remove("hidden");
    adv_pdf.classList.add("inline-block");
    adv_xl.classList.remove("hidden");
    adv_xl.classList.add("inline-block");
    adv_print_.classList.remove("hidden");
    adv_print_.classList.add("inline-block");
    adv_pdf_l.classList.remove("hidden");
    adv_pdf_l.classList.add("inline-block");
    adv_xl_l.classList.remove("hidden");
    adv_xl_l.classList.add("inline-block");
    adv_print_l.classList.remove("hidden");
    adv_print_l.classList.add("inline-block");

    adv.classList.remove("font-semibold");
    advtable.classList.remove("font-semibold")
    adv_database.classList.add("font-semibold");
}

// Get the necessary elements
const attachFileSpan = document.querySelector('.fa-paperclip').parentElement;
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.style.display = 'none';
attachFileSpan.appendChild(fileInput);

// Store the original HTML content and styles
const originalContent = attachFileSpan.innerHTML;
const originalStyles = window.getComputedStyle(attachFileSpan);

// Add click event listener to the "Attach File" span
attachFileSpan.addEventListener('click', () => {
  fileInput.click();
});

// Add change event listener to the file input
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    // Clear existing content while maintaining the span's structure
    attachFileSpan.innerHTML = '';
    
    // Create elements to display file name and close icon
    const fileNameSpan = document.createElement('span');
    fileNameSpan.textContent = file.name;
    fileNameSpan.style.color = 'red';
    fileNameSpan.style.margin = '0px 25px 20px 25px';
    
    const closeIcon = document.createElement('i');
    closeIcon.className = 'fa-solid fa-xmark';
    closeIcon.style.marginLeft = '5px';
    closeIcon.style.cursor = 'pointer';
    closeIcon.style.color = 'red';
    closeIcon.style.marginTop = '-18px';
    closeIcon.style.marginLeft = '-10px';
    
    // Create a wrapper div to maintain layout
    const wrapperDiv = document.createElement('div');
    wrapperDiv.style.display = 'flex';
    wrapperDiv.style.alignItems = 'center';
    wrapperDiv.style.marginTop = originalStyles.marginTop;
    wrapperDiv.style.marginBottom = originalStyles.marginBottom;
    
    // Append elements to the wrapper
    wrapperDiv.appendChild(fileNameSpan);
    wrapperDiv.appendChild(closeIcon);
    
    // Append the wrapper to the span
    attachFileSpan.appendChild(wrapperDiv);
    
    // Add click event listener to close icon
    closeIcon.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent triggering file input click
      fileInput.value = ''; // Clear the file input
      attachFileSpan.innerHTML = originalContent;
      attachFileSpan.appendChild(fileInput);
    });
  }
});
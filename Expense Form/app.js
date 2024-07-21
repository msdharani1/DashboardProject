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

    view.classList.remove("font-semibold");
    t.classList.add("font-semibold")
}

function form(){
    t_data.className = "hidden";
    v_form.className="";
    v_form.classList.add("w-[90%]","lg:w-[50%]", "ml-3", "bg-white", "flex");
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
    view.classList.add("font-semibold");
    t.classList.remove("font-semibold")
}

document.addEventListener('DOMContentLoaded', function() {
    const fileUpload = document.getElementById('file-upload');
    const fileName = document.getElementById('file-name');
    const removeFile = document.getElementById('remove-file');

    fileUpload.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            fileName.textContent = e.target.files[0].name;
            removeFile.classList.remove('hidden');
        }
    });

    removeFile.addEventListener('click', function() {
        fileUpload.value = '';
        fileName.textContent = 'Attach File';
        removeFile.classList.add('hidden');
    });
});
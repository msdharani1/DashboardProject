let p_O = document.getElementById("P_O");
let His = document.getElementById("His");
let inp = document.querySelector("#inp");
let Po_data = document.querySelector("#Po_data");
let his_data = document.querySelector("#his_data");
let in_data = document.querySelector("#in_data");
let side_text_1 = document.querySelector("#side_text_1");
let side_text_2 = document.querySelector("#side_text_2");
let pur = document.querySelector("#pur");
let pur_data = document.querySelector("#pur_data");
let site_usage = document.querySelector("#site_usage");
let site_usage_data = document.querySelector("#site_usage_data");
let net = document.querySelector("#net");
let net_data = document.querySelector("#net_data");

function Purchase_Order(){
    Po_data.classList.remove("hidden");
    Po_data.classList.add("block");
    his_data.classList.remove("block");
    his_data.classList.add("hidden");
    in_data.classList.remove("block")
    in_data.classList.add("hidden");
    side_text_1.classList.remove("hidden");
    side_text_1.classList.add("block");
    side_text_2.classList.remove("hidden");
    side_text_2.classList.add("block");
    pur_data.classList.remove("block");
    pur_data.classList.add("hidden");
    site_usage_data.classList.remove("block");
    site_usage_data.classList.add("hidden")
    net_data.classList.remove("block");
    net_data.classList.add("hidden");
    p_O.classList.add("font-semibold");
    His.classList.remove("font-semibold");
    inp.classList.remove("font-semibold");
    pur.classList.remove("font-semibold");
    net.classList.remove("font-semibold");
    site_usage.classList.remove("font-semibold");
    p_O.classList.remove("border-[#cdcdcd]");
    p_O.classList.add("border-[#bf9853]");
    His.classList.remove("border-[#bf9853]");
    His.classList.add("border-[#cdcdcd]");
    pur.classList.remove("border-[#bf9853]");
    pur.classList.add("border-[#cdcdcd]");
    inp.classList.remove("border-[#bf9853]");
    inp.classList.add("border-[#cdcdcd]");
    net.classList.remove("border-[#bf9853]");
    net.classList.add("border-[#cdcdcd]");
    site_usage.classList.remove("border-[#bf9853]");
    site_usage.classList.add("border-[#cdcdcd]");
}

function Purchase(){
    pur_data.classList.remove("hidden");
    pur_data.classList.add("block");
    Po_data.classList.add("hidden");
    Po_data.classList.remove("block");
    his_data.classList.remove("block");
    his_data.classList.add("hidden");
    in_data.classList.remove("block")
    in_data.classList.add("hidden");
    side_text_1.classList.remove("block");
    side_text_1.classList.add("hidden");
    side_text_2.classList.remove("block");
    side_text_2.classList.add("hidden");
    site_usage_data.classList.remove("block");
    site_usage_data.classList.add("hidden");
    net_data.classList.remove("block");
    net_data.classList.add("hidden");
    p_O.classList.remove("font-semibold");
    His.classList.remove("font-semibold");
    inp.classList.remove("font-semibold");
    net.classList.remove("font-semibold");
    site_usage.classList.remove("font-semibold");
    pur.classList.add("font-semibold");
    p_O.classList.remove("border-[#bf9853]");
    p_O.classList.add("border-[#cdcdcd]");
    His.classList.remove("border-[#bf9853]");
    His.classList.add("border-[#cdcdcd]");
    pur.classList.remove("border-[#cdcdcd]");
    pur.classList.add("border-[#bf9853]");
    inp.classList.remove("border-[#bf9853]");
    inp.classList.add("border-[#cdcdcd]");
    site_usage.classList.remove("border-[#bf9853]");
    site_usage.classList.add("border-[#cdcdcd]");
    net.classList.remove("border-[#bf9853]");
    net.classList.add("border-[#cdcdcd]");
}

function Site_Usage(){
    site_usage_data.classList.remove("hidden");
    site_usage_data.classList.add("block");
    Po_data.classList.remove("block");
    Po_data.classList.add("hidden");
    his_data.classList.remove("block");
    his_data.classList.add("hidden");
    in_data.classList.remove("block")
    in_data.classList.add("hidden");
    side_text_1.classList.remove("hidden");
    side_text_1.classList.add("block");
    side_text_2.classList.remove("hidden");
    side_text_2.classList.add("block");
    pur_data.classList.remove("block");
    pur_data.classList.add("hidden");
    net_data.classList.remove("block");
    net_data.classList.add("hidden");
    p_O.classList.remove("font-semibold");
    His.classList.remove("font-semibold");
    inp.classList.remove("font-semibold");
    pur.classList.remove("font-semibold");
    site_usage.classList.add("font-semibold");
    net.classList.remove("font-semibold");
    p_O.classList.add("border-[#cdcdcd]");
    p_O.classList.remove("border-[#bf9853]");
    His.classList.remove("border-[#bf9853]");
    His.classList.add("border-[#cdcdcd]");
    pur.classList.remove("border-[#bf9853]");
    pur.classList.add("border-[#cdcdcd]");
    inp.classList.remove("border-[#bf9853]");
    inp.classList.add("border-[#cdcdcd]");
    site_usage.classList.remove("border-[#cdcdcd]");
    site_usage.classList.add("border-[#bf9853]");
    net.classList.remove("border-[#bf9853]");
    net.classList.add("border-[#cdcdcd]");
}

function History_(){
    his_data.classList.remove("hidden");
    his_data.classList.add("block");
    Po_data.classList.remove("block");
    Po_data.classList.add("hidden");
    in_data.classList.remove("block")
    in_data.classList.add("hidden");
    side_text_1.classList.remove("block");
    side_text_1.classList.add("hidden");
    side_text_2.classList.remove("block");
    side_text_2.classList.add("hidden");
    pur_data.classList.remove("block");
    pur_data.classList.add("hidden");
    site_usage_data.classList.remove("block");
    site_usage_data.classList.add("hidden");
    net_data.classList.remove("block");
    net_data.classList.add("hidden");
    His.classList.remove("border-[#cdcdcd]");
    His.classList.add("border-[#bf9853]");
    His.classList.add("font-semibold");
    pur.classList.remove("font-semibold");
    p_O.classList.remove("font-semibold");
    inp.classList.remove("font-semibold");
    site_usage.classList.remove("font-semibold");
    net.classList.remove("font-semibold");
    p_O.classList.remove("border-[#bf9853]");
    p_O.classList.add("border-[#cdcdcd]");
    inp.classList.remove("border-[#bf9853]");
    inp.classList.add("border-[#cdcdcd]");
    pur.classList.remove("border-[#bf9853]");
    pur.classList.add("border-[#cdcdcd]");
    site_usage.classList.remove("border-[#bf9853]");
    site_usage.classList.add("border-[#cdcdcd]");
    net.classList.remove("border-[#bf9853]");
    net.classList.add("border-[#cdcdcd]");
}
function Net_Stock(){
    net_data.classList.remove("hidden");
    net_data.classList.add("block");
    his_data.classList.remove("block");
    his_data.classList.add("hidden");
    Po_data.classList.remove("block");
    Po_data.classList.add("hidden");
    in_data.classList.remove("block")
    in_data.classList.add("hidden");
    side_text_1.classList.remove("block");
    side_text_1.classList.add("hidden");
    side_text_2.classList.remove("block");
    side_text_2.classList.add("hidden");
    pur_data.classList.remove("block");
    pur_data.classList.add("hidden");
    site_usage_data.classList.remove("block");
    site_usage_data.classList.add("hidden");
    His.classList.add("border-[#cdcdcd]");
    His.classList.remove("border-[#bf9853]");
    His.classList.remove("font-semibold");
    pur.classList.remove("font-semibold");
    p_O.classList.remove("font-semibold");
    inp.classList.remove("font-semibold");
    site_usage.classList.remove("font-semibold");
    net.classList.add("font-semibold");
    p_O.classList.remove("border-[#bf9853]");
    p_O.classList.add("border-[#cdcdcd]");
    inp.classList.remove("border-[#bf9853]");
    inp.classList.add("border-[#cdcdcd]");
    pur.classList.remove("border-[#bf9853]");
    pur.classList.add("border-[#cdcdcd]");
    site_usage.classList.remove("border-[#bf9853]");
    site_usage.classList.add("border-[#cdcdcd]");
    net.classList.remove("border-[#cdcdcd]");
    net.classList.add("border-[#bf9853]");
}
function input_data(){
    in_data.classList.remove("hidden")
    in_data.classList.add("block");
    Po_data.classList.remove("block");
    Po_data.classList.add("hidden");
    his_data.classList.remove("block");
    his_data.classList.add("hidden");
    side_text_1.classList.remove("block");
    side_text_1.classList.add("hidden");
    side_text_2.classList.remove("block");
    side_text_2.classList.add("hidden");
    pur_data.classList.remove("block");
    pur_data.classList.add("hidden");
    site_usage_data.classList.remove("block");
    site_usage_data.classList.add("hidden");
    net_data.classList.remove("block");
    net_data.classList.add("hidden");
    inp.classList.add("font-semibold");
    p_O.classList.remove("font-semibold");
    net.classList.remove("font-semibold");
    His.classList.remove("font-semibold");
    pur.classList.remove("font-semibold");
    site_usage.classList.remove("font-semibold");
    inp.classList.remove("border-[#cdcdcd]");
    inp.classList.add("border-[#bf9853]");
    p_O.classList.remove("border-[#bf9853]");
    p_O.classList.add("border-[#cdcdcd]");
    His.classList.remove("border-[#bf9853]");
    His.classList.add("border-[#cdcdcd]");
    pur.classList.remove("border-[#bf9853]");
    pur.classList.add("border-[#cdcdcd]");
    site_usage.classList.remove("border-[#bf9853]");
    site_usage.classList.add("border-[#cdcdcd]");
}


// For Histroy Section Vendor selection - underline and color change function
const style = document.createElement('style');
style.innerHTML = `
  @keyframes border-bottom-loading {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  .border-bottom-animation {
    position: relative;
    display: inline-block;
    color: #e53e3e; /* red-600 */
    padding-bottom: 2px;
  }

  .border-bottom-animation::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #bf9853;
    animation: border-bottom-loading 0.5s forwards;
  }
`;
document.head.appendChild(style);

const table = document.getElementById('table1');
const selectedClass = 'border-bottom-animation';

table.addEventListener('click', (event) => {
  let target = event.target;
  while (target && target.tagName !== 'TR') {
    if (target.tagName === 'SPAN' && target.classList.contains('cursor-pointer')) {
      break;
    }
    target = target.parentElement;
  }

  if (target && target.tagName === 'SPAN' && target.classList.contains('cursor-pointer')) {
    const spans = table.querySelectorAll('td:nth-child(2) span');
    spans.forEach(span => span.classList.remove(selectedClass));
    target.classList.add(selectedClass);
  }
});
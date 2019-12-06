import recyclingCode from "./recycling-code.js";
import "./styles.css";

document.getElementById("app").innerHTML = `
<div>
<h3>Code</h3>
${JSON.stringify(recyclingCode.byCode("PET"))}
</div>
<div><h3>Name</h3>
${JSON.stringify(recyclingCode.byName("Polyethylenterephthalat"))}
</div>
<div><h3>Number</h3>
${JSON.stringify(recyclingCode.byNumber(1))}
</div>
`;

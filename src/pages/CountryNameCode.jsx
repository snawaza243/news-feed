import axios from 'axios';
import React, {useState } from 'react'

const CountryNameCode = () => {

  // function getOption() {
  //   var selectElement = document.querySelector('#select1');
  //   var output = selectElement.value;
  //   document.querySelector('.output').textContent = output;
  // }

  const [newCountry, setNewCountry] = useState('');
  console.log(newCountry)
  return (
    <>
      <select id="countryForId" name="country" style={{width:"160px",height:"40px"}}>
        <option value="AF" onChange={(e)=>setNewCountry(e.target.value)}>Afghanistan</option>
        <option value="AX" onChange={(e)=>setNewCountry(e.target.value)}>Aland Islands</option>
        <option value="AL" onChange={(e)=>setNewCountry(e.target.value)}>Albania</option>
        <option value="DZ" onChange={(e)=>setNewCountry(e.target.value)}>Algeria</option>
        <option value="AS" onChange={(e)=>setNewCountry(e.target.value)}>American Samoa</option>
        <option value="AD" onChange={(e)=>setNewCountry(e.target.value)}>Andorra</option>
        <option value="AO" onChange={(e)=>setNewCountry(e.target.value)}>Angola</option>
        <option value="AI" onChange={(e)=>setNewCountry(e.target.value)}>Anguilla</option>
        <option value="AQ" onChange={(e)=>setNewCountry(e.target.value)}>Antarctica</option>
        <option value="AG" onChange={(e)=>setNewCountry(e.target.value)}>Antigua and Barbuda</option>
        <option value="AR" onChange={(e)=>setNewCountry(e.target.value)}>Argentina</option>
        <option value="AM" onChange={(e)=>setNewCountry(e.target.value)}>Armenia</option>
        <option value="AW" onChange={(e)=>setNewCountry(e.target.value)}>Aruba</option>
        <option value="AU" onChange={(e)=>setNewCountry(e.target.value)}>Australia</option>
        <option value="AT" onChange={(e)=>setNewCountry(e.target.value)}>Austria</option>
        <option value="AZ" onChange={(e)=>setNewCountry(e.target.value)}>Azerbaijan</option>
        <option value="BS" onChange={(e)=>setNewCountry(e.target.value)}>Bahamas</option>
        <option value="BH" onChange={(e)=>setNewCountry(e.target.value)}>Bahrain</option>
        <option value="BD" onChange={(e)=>setNewCountry(e.target.value)}>Bangladesh</option>
        <option value="BB" onChange={(e)=>setNewCountry(e.target.value)}>Barbados</option>
        <option value="BY" onChange={(e)=>setNewCountry(e.target.value)}>Belarus</option>
        <option value="BE" onChange={(e)=>setNewCountry(e.target.value)}>Belgium</option>
        <option value="BZ" onChange={(e)=>setNewCountry(e.target.value)}>Belize</option>
        <option value="BJ" onChange={(e)=>setNewCountry(e.target.value)}>Benin</option>
        <option value="BM" onChange={(e)=>setNewCountry(e.target.value)}>Bermuda</option>
        <option value="BT" onChange={(e)=>setNewCountry(e.target.value)}>Bhutan</option>
        <option value="BO" onChange={(e)=>setNewCountry(e.target.value)}>Bolivia</option>
        <option value="BQ" onChange={(e)=>setNewCountry(e.target.value)}>Bonaire, Sint Eustatius and Saba</option>
        <option value="BA" onChange={(e)=>setNewCountry(e.target.value)}>Bosnia and Herzegovina</option>
        <option value="BW" onChange={(e)=>setNewCountry(e.target.value)}>Botswana</option>
        <option value="BV" onChange={(e)=>setNewCountry(e.target.value)}>Bouvet Island</option>
        <option value="BR" onChange={(e)=>setNewCountry(e.target.value)}>Brazil</option>
        <option value="IO" onChange={(e)=>setNewCountry(e.target.value)}>British Indian Ocean Territory</option>
        <option value="BN" onChange={(e)=>setNewCountry(e.target.value)}>Brunei Darussalam</option>
        <option value="BG" onChange={(e)=>setNewCountry(e.target.value)}>Bulgaria</option>
        <option value="BF" onChange={(e)=>setNewCountry(e.target.value)}>Burkina Faso</option>
        <option value="BI" onChange={(e)=>setNewCountry(e.target.value)}>Burundi</option>
        <option value="KH" onChange={(e)=>setNewCountry(e.target.value)}>Cambodia</option>
        <option value="CM" onChange={(e)=>setNewCountry(e.target.value)}>Cameroon</option>
        <option value="CA" onChange={(e)=>setNewCountry(e.target.value)}>Canada</option>
        <option value="CV" onChange={(e)=>setNewCountry(e.target.value)}>Cape Verde</option>
        <option value="KY" onChange={(e)=>setNewCountry(e.target.value)}>Cayman Islands</option>
        <option value="CF" onChange={(e)=>setNewCountry(e.target.value)}>Central African Republic</option>
        <option value="TD" onChange={(e)=>setNewCountry(e.target.value)}>Chad</option>
        <option value="CL" onChange={(e)=>setNewCountry(e.target.value)}>Chile</option>
        <option value="CN" onChange={(e)=>setNewCountry(e.target.value)}>China</option>
        <option value="CX" onChange={(e)=>setNewCountry(e.target.value)}>Christmas Island</option>
        <option value="CC" onChange={(e)=>setNewCountry(e.target.value)}>Cocos (Keeling) Islands</option>
        <option value="CO" onChange={(e)=>setNewCountry(e.target.value)}>Colombia</option>
        <option value="KM" onChange={(e)=>setNewCountry(e.target.value)}>Comoros</option>
        <option value="CG" onChange={(e)=>setNewCountry(e.target.value)}>Congo</option>
        <option value="CD" onChange={(e)=>setNewCountry(e.target.value)}>Congo, Democratic Republic of the Congo</option>
        <option value="CK" onChange={(e)=>setNewCountry(e.target.value)}>Cook Islands</option>
        <option value="CR" onChange={(e)=>setNewCountry(e.target.value)}>Costa Rica</option>
        <option value="CI" onChange={(e)=>setNewCountry(e.target.value)}>Cote D'Ivoire</option>
        <option value="HR" onChange={(e)=>setNewCountry(e.target.value)}>Croatia</option>
        <option value="CU" onChange={(e)=>setNewCountry(e.target.value)}>Cuba</option>
        <option value="CW" onChange={(e)=>setNewCountry(e.target.value)}>Curacao</option>
        <option value="CY" onChange={(e)=>setNewCountry(e.target.value)}>Cyprus</option>
        <option value="CZ" onChange={(e)=>setNewCountry(e.target.value)}>Czech Republic</option>
        <option value="DK" onChange={(e)=>setNewCountry(e.target.value)}>Denmark</option>
        <option value="DJ" onChange={(e)=>setNewCountry(e.target.value)}>Djibouti</option>
        <option value="DM" onChange={(e)=>setNewCountry(e.target.value)}>Dominica</option>
        <option value="DO" onChange={(e)=>setNewCountry(e.target.value)}>Dominican Republic</option>
        <option value="EC" onChange={(e)=>setNewCountry(e.target.value)}>Ecuador</option>
        <option value="EG" onChange={(e)=>setNewCountry(e.target.value)}>Egypt</option>
        <option value="SV" onChange={(e)=>setNewCountry(e.target.value)}>El Salvador</option>
        <option value="GQ" onChange={(e)=>setNewCountry(e.target.value)}>Equatorial Guinea</option>
        <option value="ER" onChange={(e)=>setNewCountry(e.target.value)}>Eritrea</option>
        <option value="EE" onChange={(e)=>setNewCountry(e.target.value)}>Estonia</option>
        <option value="ET" onChange={(e)=>setNewCountry(e.target.value)}>Ethiopia</option>
        <option value="FK" onChange={(e)=>setNewCountry(e.target.value)}>Falkland Islands (Malvinas)</option>
        <option value="FO" onChange={(e)=>setNewCountry(e.target.value)}>Faroe Islands</option>
        <option value="FJ" onChange={(e)=>setNewCountry(e.target.value)}>Fiji</option>
        <option value="FI" onChange={(e)=>setNewCountry(e.target.value)}>Finland</option>
        <option value="FR" onChange={(e)=>setNewCountry(e.target.value)}>France</option>
        <option value="GF" onChange={(e)=>setNewCountry(e.target.value)}>French Guiana</option>
        <option value="PF" onChange={(e)=>setNewCountry(e.target.value)}>French Polynesia</option>
        <option value="TF" onChange={(e)=>setNewCountry(e.target.value)}>French Southern Territories</option>
        <option value="GA" onChange={(e)=>setNewCountry(e.target.value)}>Gabon</option>
        <option value="GM" onChange={(e)=>setNewCountry(e.target.value)}>Gambia</option>
        <option value="GE" onChange={(e)=>setNewCountry(e.target.value)}>Georgia</option>
        <option value="DE" onChange={(e)=>setNewCountry(e.target.value)}>Germany</option>
        <option value="GH" onChange={(e)=>setNewCountry(e.target.value)}>Ghana</option>
        <option value="GI" onChange={(e)=>setNewCountry(e.target.value)}>Gibraltar</option>
        <option value="GR" onChange={(e)=>setNewCountry(e.target.value)}>Greece</option>
        <option value="GL" onChange={(e)=>setNewCountry(e.target.value)}>Greenland</option>
        <option value="GD" onChange={(e)=>setNewCountry(e.target.value)}>Grenada</option>
        <option value="GP" onChange={(e)=>setNewCountry(e.target.value)}>Guadeloupe</option>
        <option value="GU" onChange={(e)=>setNewCountry(e.target.value)}>Guam</option>
        <option value="GT" onChange={(e)=>setNewCountry(e.target.value)}>Guatemala</option>
        <option value="GG" onChange={(e)=>setNewCountry(e.target.value)}>Guernsey</option>
        <option value="GN" onChange={(e)=>setNewCountry(e.target.value)}>Guinea</option>
        <option value="GW" onChange={(e)=>setNewCountry(e.target.value)}>Guinea-Bissau</option>
        <option value="GY" onChange={(e)=>setNewCountry(e.target.value)}>Guyana</option>
        <option value="HT" onChange={(e)=>setNewCountry(e.target.value)}>Haiti</option>
        <option value="HM" onChange={(e)=>setNewCountry(e.target.value)}>Heard Island and Mcdonald Islands</option>
        <option value="VA" onChange={(e)=>setNewCountry(e.target.value)}>Holy See (Vatican City State)</option>
        <option value="HN" onChange={(e)=>setNewCountry(e.target.value)}>Honduras</option>
        <option value="HK" onChange={(e)=>setNewCountry(e.target.value)}>Hong Kong</option>
        <option value="HU" onChange={(e)=>setNewCountry(e.target.value)}>Hungary</option>
        <option value="IS" onChange={(e)=>setNewCountry(e.target.value)}>Iceland</option>
        <option value="IN" onChange={(e)=>setNewCountry(e.target.value)} >India</option>
        <option value="ID" onChange={(e)=>setNewCountry(e.target.value)}>Indonesia</option>
        <option value="IR" onChange={(e)=>setNewCountry(e.target.value)}>Iran, Islamic Republic of</option>
        <option value="IQ" onChange={(e)=>setNewCountry(e.target.value)}>Iraq</option>
        <option value="IE" onChange={(e)=>setNewCountry(e.target.value)}>Ireland</option>
        <option value="IM" onChange={(e)=>setNewCountry(e.target.value)}>Isle of Man</option>
        <option value="IL" onChange={(e)=>setNewCountry(e.target.value)}>Israel</option>
        <option value="IT" onChange={(e)=>setNewCountry(e.target.value)}>Italy</option>
        <option value="JM" onChange={(e)=>setNewCountry(e.target.value)}>Jamaica</option>
        <option value="JP" onChange={(e)=>setNewCountry(e.target.value)}>Japan</option>
        <option value="JE" onChange={(e)=>setNewCountry(e.target.value)}>Jersey</option>
        <option value="JO" onChange={(e)=>setNewCountry(e.target.value)}>Jordan</option>
        <option value="KZ" onChange={(e)=>setNewCountry(e.target.value)}>Kazakhstan</option>
        <option value="KE" onChange={(e)=>setNewCountry(e.target.value)}>Kenya</option>
        <option value="KI" onChange={(e)=>setNewCountry(e.target.value)}>Kiribati</option>
        <option value="KP" onChange={(e)=>setNewCountry(e.target.value)}>Korea, Democratic People's Republic of</option>
        <option value="KR" onChange={(e)=>setNewCountry(e.target.value)}>Korea, Republic of</option>
        <option value="XK" onChange={(e)=>setNewCountry(e.target.value)}>Kosovo</option>
        <option value="KW" onChange={(e)=>setNewCountry(e.target.value)}>Kuwait</option>
        <option value="KG" onChange={(e)=>setNewCountry(e.target.value)}>Kyrgyzstan</option>
        <option value="LA" onChange={(e)=>setNewCountry(e.target.value)}>Lao People's Democratic Republic</option>
        <option value="LV" onChange={(e)=>setNewCountry(e.target.value)}>Latvia</option>
        <option value="LB" onChange={(e)=>setNewCountry(e.target.value)}>Lebanon</option>
        <option value="LS" onChange={(e)=>setNewCountry(e.target.value)}>Lesotho</option>
        <option value="LR" onChange={(e)=>setNewCountry(e.target.value)}>Liberia</option>
        <option value="LY" onChange={(e)=>setNewCountry(e.target.value)}>Libyan Arab Jamahiriya</option>
        <option value="LI" onChange={(e)=>setNewCountry(e.target.value)}>Liechtenstein</option>
        <option value="LT" onChange={(e)=>setNewCountry(e.target.value)}>Lithuania</option>
        <option value="LU" onChange={(e)=>setNewCountry(e.target.value)}>Luxembourg</option>
        <option value="MO" onChange={(e)=>setNewCountry(e.target.value)}>Macao</option>
        <option value="MK" onChange={(e)=>setNewCountry(e.target.value)}>Macedonia, the Former Yugoslav Republic </option>
        <option value="MG" onChange={(e)=>setNewCountry(e.target.value)}>Madagascar</option>
        <option value="MW" onChange={(e)=>setNewCountry(e.target.value)}>Malawi</option>
        <option value="MY" onChange={(e)=>setNewCountry(e.target.value)}>Malaysia</option>
        <option value="MV" onChange={(e)=>setNewCountry(e.target.value)}>Maldives</option>
        <option value="ML" onChange={(e)=>setNewCountry(e.target.value)}>Mali</option>
        <option value="MT" onChange={(e)=>setNewCountry(e.target.value)}>Malta</option>
        <option value="MH" onChange={(e)=>setNewCountry(e.target.value)}>Marshall Islands</option>
        <option value="MQ" onChange={(e)=>setNewCountry(e.target.value)}>Martinique</option>
        <option value="MR" onChange={(e)=>setNewCountry(e.target.value)}>Mauritania</option>
        <option value="MU" onChange={(e)=>setNewCountry(e.target.value)}>Mauritius</option>
        <option value="YT" onChange={(e)=>setNewCountry(e.target.value)}>Mayotte</option>
        <option value="MX" onChange={(e)=>setNewCountry(e.target.value)}>Mexico</option>
        <option value="FM" onChange={(e)=>setNewCountry(e.target.value)}>Micronesia, Federated States of</option>
        <option value="MD" onChange={(e)=>setNewCountry(e.target.value)}>Moldova, Republic of</option>
        <option value="MC" onChange={(e)=>setNewCountry(e.target.value)}>Monaco</option>
        <option value="MN" onChange={(e)=>setNewCountry(e.target.value)}>Mongolia</option>
        <option value="ME" onChange={(e)=>setNewCountry(e.target.value)}>Montenegro</option>
        <option value="MS" onChange={(e)=>setNewCountry(e.target.value)}>Montserrat</option>
        <option value="MA" onChange={(e)=>setNewCountry(e.target.value)}>Morocco</option>
        <option value="MZ" onChange={(e)=>setNewCountry(e.target.value)}>Mozambique</option>
        <option value="MM" onChange={(e)=>setNewCountry(e.target.value)}>Myanmar</option>
        <option value="NA" onChange={(e)=>setNewCountry(e.target.value)}>Namibia</option>
        <option value="NR" onChange={(e)=>setNewCountry(e.target.value)}>Nauru</option>
        <option value="NP" onChange={(e)=>setNewCountry(e.target.value)}>Nepal</option>
        <option value="NL" onChange={(e)=>setNewCountry(e.target.value)}>Netherlands</option>
        <option value="AN" onChange={(e)=>setNewCountry(e.target.value)}>Netherlands Antilles</option>
        <option value="NC" onChange={(e)=>setNewCountry(e.target.value)}>New Caledonia</option>
        <option value="NZ" onChange={(e)=>setNewCountry(e.target.value)}>New Zealand</option>
        <option value="NI" onChange={(e)=>setNewCountry(e.target.value)}>Nicaragua</option>
        <option value="NE" onChange={(e)=>setNewCountry(e.target.value)}>Niger</option>
        <option value="NG" onChange={(e)=>setNewCountry(e.target.value)}>Nigeria</option>
        <option value="NU" onChange={(e)=>setNewCountry(e.target.value)}>Niue</option>
        <option value="NF" onChange={(e)=>setNewCountry(e.target.value)}>Norfolk Island</option>
        <option value="MP" onChange={(e)=>setNewCountry(e.target.value)}>Northern Mariana Islands</option>
        <option value="NO" onChange={(e)=>setNewCountry(e.target.value)}>Norway</option>
        <option value="OM" onChange={(e)=>setNewCountry(e.target.value)}>Oman</option>
        <option value="PK" onChange={(e)=>setNewCountry(e.target.value)}>Pakistan</option>
        <option value="PW" onChange={(e)=>setNewCountry(e.target.value)}>Palau</option>
        <option value="PS" onChange={(e)=>setNewCountry(e.target.value)}>Palestinian Territory, Occupied</option>
        <option value="PA" onChange={(e)=>setNewCountry(e.target.value)}>Panama</option>
        <option value="PG" onChange={(e)=>setNewCountry(e.target.value)}>Papua New Guinea</option>
        <option value="PY" onChange={(e)=>setNewCountry(e.target.value)}>Paraguay</option>
        <option value="PE" onChange={(e)=>setNewCountry(e.target.value)}>Peru</option>
        <option value="PH" onChange={(e)=>setNewCountry(e.target.value)}>Philippines</option>
        <option value="PN" onChange={(e)=>setNewCountry(e.target.value)}>Pitcairn</option>
        <option value="PL" onChange={(e)=>setNewCountry(e.target.value)}>Poland</option>
        <option value="PT" onChange={(e)=>setNewCountry(e.target.value)}>Portugal</option>
        <option value="PR" onChange={(e)=>setNewCountry(e.target.value)}>Puerto Rico</option>
        <option value="QA" onChange={(e)=>setNewCountry(e.target.value)}>Qatar</option>
        <option value="RE" onChange={(e)=>setNewCountry(e.target.value)}>Reunion</option>
        <option value="RO" onChange={(e)=>setNewCountry(e.target.value)}>Romania</option>
        <option value="RU" onChange={(e)=>setNewCountry(e.target.value)}>Russian Federation</option>
        <option value="RW" onChange={(e)=>setNewCountry(e.target.value)}>Rwanda</option>
        <option value="BL" onChange={(e)=>setNewCountry(e.target.value)}>Saint Barthelemy</option>
        <option value="SH" onChange={(e)=>setNewCountry(e.target.value)}>Saint Helena</option>
        <option value="KN" onChange={(e)=>setNewCountry(e.target.value)}>Saint Kitts and Nevis</option>
        <option value="LC" onChange={(e)=>setNewCountry(e.target.value)}>Saint Lucia</option>
        <option value="MF" onChange={(e)=>setNewCountry(e.target.value)}>Saint Martin</option>
        <option value="PM" onChange={(e)=>setNewCountry(e.target.value)}>Saint Pierre and Miquelon</option>
        <option value="VC" onChange={(e)=>setNewCountry(e.target.value)}>Saint Vincent and the Grenadines</option>
        <option value="WS" onChange={(e)=>setNewCountry(e.target.value)}>Samoa</option>
        <option value="SM" onChange={(e)=>setNewCountry(e.target.value)}>San Marino</option>
        <option value="ST" onChange={(e)=>setNewCountry(e.target.value)}>Sao Tome and Principe</option>
        <option value="SA" onChange={(e)=>setNewCountry(e.target.value)}>Saudi Arabia</option>
        <option value="SN" onChange={(e)=>setNewCountry(e.target.value)}>Senegal</option>
        <option value="RS" onChange={(e)=>setNewCountry(e.target.value)}>Serbia</option>
        <option value="CS" onChange={(e)=>setNewCountry(e.target.value)}>Serbia and Montenegro</option>
        <option value="SC" onChange={(e)=>setNewCountry(e.target.value)}>Seychelles</option>
        <option value="SL" onChange={(e)=>setNewCountry(e.target.value)}>Sierra Leone</option>
        <option value="SG" onChange={(e)=>setNewCountry(e.target.value)}>Singapore</option>
        <option value="SX" onChange={(e)=>setNewCountry(e.target.value)}>Sint Maarten</option>
        <option value="SK" onChange={(e)=>setNewCountry(e.target.value)}>Slovakia</option>
        <option value="SI" onChange={(e)=>setNewCountry(e.target.value)}>Slovenia</option>
        <option value="SB" onChange={(e)=>setNewCountry(e.target.value)}>Solomon Islands</option>
        <option value="SO" onChange={(e)=>setNewCountry(e.target.value)}>Somalia</option>
        <option value="ZA" onChange={(e)=>setNewCountry(e.target.value)}>South Africa</option>
        <option value="GS" onChange={(e)=>setNewCountry(e.target.value)}>South Georgia and the South Sandwich </option>
        <option value="SS" onChange={(e)=>setNewCountry(e.target.value)}>South Sudan</option>
        <option value="ES" onChange={(e)=>setNewCountry(e.target.value)}>Spain</option>
        <option value="LK" onChange={(e)=>setNewCountry(e.target.value)}>Sri Lanka</option>
        <option value="SD" onChange={(e)=>setNewCountry(e.target.value)}>Sudan</option>
        <option value="SR" onChange={(e)=>setNewCountry(e.target.value)}>Suriname</option>
        <option value="SJ" onChange={(e)=>setNewCountry(e.target.value)}>Svalbard and Jan Mayen</option>
        <option value="SZ" onChange={(e)=>setNewCountry(e.target.value)}>Swaziland</option>
        <option value="SE" onChange={(e)=>setNewCountry(e.target.value)}>Sweden</option>
        <option value="CH" onChange={(e)=>setNewCountry(e.target.value)}>Switzerland</option>
        <option value="SY" onChange={(e)=>setNewCountry(e.target.value)}>Syrian Arab Republic</option>
        <option value="TW" onChange={(e)=>setNewCountry(e.target.value)}>Taiwan, Province of China</option>
        <option value="TJ" onChange={(e)=>setNewCountry(e.target.value)}>Tajikistan</option>
        <option value="TZ" onChange={(e)=>setNewCountry(e.target.value)}>Tanzania, United Republic of</option>
        <option value="TH" onChange={(e)=>setNewCountry(e.target.value)}>Thailand</option>
        <option value="TL" onChange={(e)=>setNewCountry(e.target.value)}>Timor-Leste</option>
        <option value="TG" onChange={(e)=>setNewCountry(e.target.value)}>Togo</option>
        <option value="TK" onChange={(e)=>setNewCountry(e.target.value)}>Tokelau</option>
        <option value="TO" onChange={(e)=>setNewCountry(e.target.value)}>Tonga</option>
        <option value="TT" onChange={(e)=>setNewCountry(e.target.value)}>Trinidad and Tobago</option>
        <option value="TN" onChange={(e)=>setNewCountry(e.target.value)}>Tunisia</option>
        <option value="TR" onChange={(e)=>setNewCountry(e.target.value)}>Turkey</option>
        <option value="TM" onChange={(e)=>setNewCountry(e.target.value)}>Turkmenistan</option>
        <option value="TC" onChange={(e)=>setNewCountry(e.target.value)}>Turks and Caicos Islands</option>
        <option value="TV" onChange={(e)=>setNewCountry(e.target.value)}>Tuvalu</option>
        <option value="UG" onChange={(e)=>setNewCountry(e.target.value)}>Uganda</option>
        <option value="UA" onChange={(e)=>setNewCountry(e.target.value)}>Ukraine</option>
        <option value="AE" onChange={(e)=>setNewCountry(e.target.value)}>United Arab Emirates</option>
        <option value="GB" onChange={(e)=>setNewCountry(e.target.value)}>United Kingdom</option>
        <option value="US" onChange={(e)=>setNewCountry(e.target.value)}>United States</option>
        <option value="UM" onChange={(e)=>setNewCountry(e.target.value)}>United States Minor Outlying Islands</option>
        <option value="UY" onChange={(e)=>setNewCountry(e.target.value)}>Uruguay</option>
        <option value="UZ" onChange={(e)=>setNewCountry(e.target.value)}>Uzbekistan</option>
        <option value="VU" onChange={(e)=>setNewCountry(e.target.value)}>Vanuatu</option>
        <option value="VE" onChange={(e)=>setNewCountry(e.target.value)}>Venezuela</option>
        <option value="VN" onChange={(e)=>setNewCountry(e.target.value)}>Viet Nam</option>
        <option value="VG" onChange={(e)=>setNewCountry(e.target.value)}>Virgin Islands, British</option>
        <option value="VI" onChange={(e)=>setNewCountry(e.target.value)}>Virgin Islands, U.s.</option>
        <option value="WF" onChange={(e)=>setNewCountry(e.target.value)}>Wallis and Futuna</option>
        <option value="EH" onChange={(e)=>setNewCountry(e.target.value)}>Western Sahara</option>
        <option value="YE" onChange={(e)=>setNewCountry(e.target.value)}>Yemen</option>
        <option value="ZM" onChange={(e)=>setNewCountry(e.target.value)}>Zambia</option>
        <option value="ZW" onChange={(e)=>setNewCountry(e.target.value)}>Zimbabwe</option>
        <optgroup label="Other countries">
          <option data-CountryNameCode="ZM" value="260" onChange={(e)=>setNewCountry(e.target.value)}>Zambia (+260)</option>
          <option data-CountryNameCode="ZW" value="263" onChange={(e)=>setNewCountry(e.target.value)}>Zimbabwe (+263)</option>
        </optgroup>
      </select>
    </>
  )
}

export default CountryNameCode;
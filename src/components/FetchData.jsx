import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Hero } from './Hero';
export const FetchData = ({ cat }) => {
  const [data, setData] = useState("");

  var key = '564424204fdc497b997d68e957fbaff0'

  const fetchData = async () => {
    await axios
      .get(
        cat ? `https://newsapi.org/v2/top-headlines?country=${value.toLowerCase()}&category=${cat}&apiKey=${key}`
          : `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${key}`)
      .then((res) => setData(res.data.articles));

  };
  ;

  useEffect(() => {
    fetchData();
  }, [cat]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var postCat = capitalizeFirstLetter(cat)
  // document.title = cat ? postCat : document.getElementsByClassName("pageText");
  document.title ="News Feed : " +  postCat;
  
  var countLowNameCode = cat ? postCat : document.getElementsByClassName("pageText");



  const options = [
    { value: 'IN', label: 'India' },
    { value: 'AR', label: 'Argentina' },
    { value: 'AU', label: 'Australia' },
    { value: 'AT', label: 'Austria' },
    { value: 'BE', label: 'Belgium' },
    { value: 'BR', label: 'Brazil' },
    { value: 'BG', label: 'Bulgaria' },
    { value: 'CA', label: 'Canada' },
    { value: 'CN', label: 'China' },
    { value: 'CO', label: 'Colombia' },
    { value: 'CU', label: 'Cuba' },
    { value: 'CZ', label: 'Czech Republic' },
    { value: 'EG', label: 'Egypt' },
    { value: 'FR', label: 'France' },
    { value: 'DE', label: 'Germany' },
    { value: 'GR', label: 'Greece' },
    { value: 'HK', label: 'Hong Kong' },
    { value: 'HU', label: 'Hungary' },
    { value: 'IN', label: 'India' },
    { value: 'IE', label: 'Ireland' },
    { value: 'IL', label: 'Israel' },
    { value: 'IT', label: 'Italy' },
    { value: 'JP', label: 'Japan' },
    { value: 'LV', label: 'Latvia' },
    { value: 'LT', label: 'Lithuania' },
    { value: 'MY', label: 'Malaysia' },
    { value: 'MX', label: 'Mexico' },
    { value: 'MA', label: 'Morocco' },
    { value: 'NL', label: 'Netherlands' },
    { value: 'NZ', label: 'New Zealand' },
    { value: 'NG', label: 'Nigeria' },
    { value: 'NO', label: 'Norway' },
    { value: 'PH', label: 'Philippines' },
    { value: 'PL', label: 'Poland' },
    { value: 'PT', label: 'Portugal' },
    { value: 'RO', label: 'Romania' },
    { value: 'RU', label: 'Russian Federation' },
    { value: 'SA', label: 'Saudi Arabia' },
    { value: 'RS', label: 'Serbia' },
    { value: 'SG', label: 'Singapore' },
    { value: 'SK', label: 'Slovakia' },
    { value: 'SI', label: 'Slovenia' },
    { value: 'ZA', label: 'South Africa' },
    { value: 'KR', label: 'South Korea, Republic of' },
    { value: 'SE', label: 'Sweden' },
    { value: 'CH', label: 'Switzerland' },
    { value: 'TW', label: 'Taiwan, Province of China' },
    { value: 'TH', label: 'Thailand' },
    { value: 'TR', label: 'Turkey' },
    { value: 'UA', label: 'Ukraine' },
    { value: 'AE', label: 'United Arab Emirates' },
    { value: 'GB', label: 'United Kingdom' },
    { value: 'US', label: 'United States' },
    { value: 'VE', label: 'Venezuela' },





    
    { value: 'AX', label: 'Aland Islands' },
    { value: 'AL', label: 'Albania' },
    { value: 'DZ', label: 'Algeria' },
    { value: 'AS', label: 'American Samoa' },
    { value: 'AD', label: 'Andorra' },
    { value: 'AO', label: 'Angola' },
    { value: 'AI', label: 'Anguilla' },
    { value: 'AQ', label: 'Antarctica' },
    { value: 'AG', label: 'Antigua and Barbuda' },
    { value: 'AM', label: 'Armenia' },
    { value: 'AW', label: 'Aruba' },
    { value: 'AZ', label: 'Azerbaijan' },
    { value: 'BS', label: 'Bahamas' },
    { value: 'BH', label: 'Bahrain' },
    { value: 'BD', label: 'Bangladesh' },
    { value: 'BB', label: 'Barbados' },
    { value: 'BY', label: 'Belarus' },
    { value: 'BZ', label: 'Belize' },
    { value: 'BJ', label: 'Benin' },
    { value: 'BM', label: 'Bermuda' },
    { value: 'BT', label: 'Bhutan' },
    { value: 'BO', label: 'Bolivia' },
    { value: 'BQ', label: 'Bonaire, Sint Eustatius and Saba' },
    { value: 'BA', label: 'Bosnia and Herzegovina' },
    { value: 'BW', label: 'Botswana' },
    { value: 'BV', label: 'Bouvet Island' },
    { value: 'IO', label: 'British Indian Ocean Territory' },
    { value: 'BN', label: 'Brunei Darussalam' },
    { value: 'BF', label: 'Burkina Faso' },
    { value: 'BI', label: 'Burundi' },
    { value: 'KH', label: 'Cambodia' },
    { value: 'CM', label: 'Cameroon' },
    { value: 'CV', label: 'Cape Verde' },
    { value: 'KY', label: 'Cayman Islands' },
    { value: 'CF', label: 'Central African Republic' },
    { value: 'TD', label: 'Chad' },
    { value: 'CL', label: 'Chile' },
    { value: 'CX', label: 'Christmas Island' },
    { value: 'CC', label: 'Cocos (Keeling) Islands' },
    { value: 'KM', label: 'Comoros' },
    { value: 'CG', label: 'Congo' },
    { value: 'CD', label: 'Congo, Democratic Republic of the Congo' },
    { value: 'CK', label: 'Cook Islands' },
    { value: 'CR', label: 'Costa Rica' },
    { value: 'CI', label: 'Cote D Ivoire' },
    { value: 'HR', label: 'Croatia' },
    { value: 'CW', label: 'Curacao' },
    { value: 'CY', label: 'Cyprus' },
    { value: 'DK', label: 'Denmark' },
    { value: 'DJ', label: 'Djibouti' },
    { value: 'DM', label: 'Dominica' },
    { value: 'DO', label: 'Dominican Republic' },
    { value: 'EC', label: 'Ecuador' },
    { value: 'SV', label: 'El Salvador' },
    { value: 'GQ', label: 'Equatorial Guinea' },
    { value: 'ER', label: 'Eritrea' },
    { value: 'EE', label: 'Estonia' },
    { value: 'ET', label: 'Ethiopia' },
    { value: 'FK', label: 'Falkland Islands (Malvinas)' },
    { value: 'FO', label: 'Faroe Islands' },
    { value: 'FJ', label: 'Fiji' },
    { value: 'FI', label: 'Finland' },
    { value: 'GF', label: 'French Guiana' },
    { value: 'PF', label: 'French Polynesia' },
    { value: 'TF', label: 'French Southern Territories' },
    { value: 'GA', label: 'Gabon' },
    { value: 'GM', label: 'Gambia' },
    { value: 'GE', label: 'Georgia' },
    { value: 'GH', label: 'Ghana' },
    { value: 'GI', label: 'Gibraltar' },
    { value: 'GL', label: 'Greenland' },
    { value: 'GD', label: 'Grenada' },
    { value: 'GP', label: 'Guadeloupe' },
    { value: 'GU', label: 'Guam' },
    { value: 'GT', label: 'Guatemala' },
    { value: 'GG', label: 'Guernsey' },
    { value: 'GN', label: 'Guinea' },
    { value: 'GW', label: 'Guinea-Bissau' },
    { value: 'GY', label: 'Guyana' },
    { value: 'HT', label: 'Haiti' },
    { value: 'HM', label: 'Heard Island and Mcdonald Islands' },
    { value: 'VA', label: 'Holy See (Vatican City State)' },
    { value: 'HN', label: 'Honduras' },
    { value: 'IS', label: 'Iceland' },
    { value: 'ID', label: 'Indonesia' },
    { value: 'IR', label: 'Iran, Islamic Republic of' },
    { value: 'IQ', label: 'Iraq' },
    { value: 'IM', label: 'Isle of Man' },
    { value: 'JM', label: 'Jamaica' },
    { value: 'JE', label: 'Jersey' },
    { value: 'JO', label: 'Jordan' },
    { value: 'KZ', label: 'Kazakhstan' },
    { value: 'KE', label: 'Kenya' },
    { value: 'KI', label: 'Kiribati' },
    { value: 'KP', label: 'Korea, Democratic Peoples Republic of' },
    { value: 'XK', label: 'Kosovo' },
    { value: 'KW', label: 'Kuwait' },
    { value: 'KG', label: 'Kyrgyzstan' },
    { value: 'LA', label: 'Lao Peoples Democratic Republic' },
    { value: 'LB', label: 'Lebanon' },
    { value: 'LS', label: 'Lesotho' },
    { value: 'LR', label: 'Liberia' },
    { value: 'LY', label: 'Libyan Arab Jamahiriya' },
    { value: 'LI', label: 'Liechtenstein' },
    { value: 'LU', label: 'Luxembourg' },
    { value: 'MO', label: 'Macao' },
    { value: 'MK', label: 'Macedonia, the Former Yugoslav Republic ' },
    { value: 'MG', label: 'Madagascar' },
    { value: 'MW', label: 'Malawi' },
    { value: 'MV', label: 'Maldives' },
    { value: 'ML', label: 'Mali' },
    { value: 'MT', label: 'Malta' },
    { value: 'MH', label: 'Marshall Islands' },
    { value: 'MQ', label: 'Martinique' },
    { value: 'MR', label: 'Mauritania' },
    { value: 'MU', label: 'Mauritius' },
    { value: 'YT', label: 'Mayotte' },
    { value: 'FM', label: 'Micronesia, Federated States of' },
    { value: 'MD', label: 'Moldova, Republic of' },
    { value: 'MC', label: 'Monaco' },
    { value: 'MN', label: 'Mongolia' },
    { value: 'ME', label: 'Montenegro' },
    { value: 'MS', label: 'Montserrat' },
    { value: 'MZ', label: 'Mozambique' },
    { value: 'MM', label: 'Myanmar' },
    { value: 'NA', label: 'Namibia' },
    { value: 'NR', label: 'Nauru' },
    { value: 'NP', label: 'Nepal' },
    { value: 'AN', label: 'Netherlands Antilles' },
    { value: 'NC', label: 'New Caledonia' },
    { value: 'NI', label: 'Nicaragua' },
    { value: 'NE', label: 'Niger' },
    { value: 'NU', label: 'Niue' },
    { value: 'NF', label: 'Norfolk Island' },
    { value: 'MP', label: 'Northern Mariana Islands' },
    { value: 'OM', label: 'Oman' },
    { value: 'PK', label: 'Pakistan' },
    { value: 'PW', label: 'Palau' },
    { value: 'PS', label: 'Palestinian Territory, Occupied' },
    { value: 'PA', label: 'Panama' },
    { value: 'PG', label: 'Papua New Guinea' },
    { value: 'PY', label: 'Paraguay' },
    { value: 'PE', label: 'Peru' },
    { value: 'PN', label: 'Pitcairn' },
    { value: 'PR', label: 'Puerto Rico' },
    { value: 'QA', label: 'Qatar' },
    { value: 'RE', label: 'Reunion' },
    { value: 'RW', label: 'Rwanda' },
    { value: 'BL', label: 'Saint Barthelemy' },
    { value: 'SH', label: 'Saint Helena' },
    { value: 'KN', label: 'Saint Kitts and Nevis' },
    { value: 'LC', label: 'Saint Lucia' },
    { value: 'MF', label: 'Saint Martin' },
    { value: 'PM', label: 'Saint Pierre and Miquelon' },
    { value: 'VC', label: 'Saint Vincent and the Grenadines' },
    { value: 'WS', label: 'Samoa' },
    { value: 'SM', label: 'San Marino' },
    { value: 'ST', label: 'Sao Tome and Principe' },
    { value: 'SN', label: 'Senegal' },
    { value: 'CS', label: 'Serbia and Montenegro' },
    { value: 'SC', label: 'Seychelles' },
    { value: 'SL', label: 'Sierra Leone' },
    { value: 'SX', label: 'Sint Maarten' },
    { value: 'SB', label: 'Solomon Islands' },
    { value: 'SO', label: 'Somalia' },
    { value: 'GS', label: 'South Georgia and the South Sandwich ' },
    { value: 'SS', label: 'South Sudan' },
    { value: 'ES', label: 'Spain' },
    { value: 'LK', label: 'Sri Lanka' },
    { value: 'SD', label: 'Sudan' },
    { value: 'SR', label: 'Suriname' },
    { value: 'SJ', label: 'Svalbard and Jan Mayen' },
    { value: 'SZ', label: 'Swaziland' },
    { value: 'SY', label: 'Syrian Arab Republic' },
    { value: 'TJ', label: 'Tajikistan' },
    { value: 'TZ', label: 'Tanzania, United Republic of' },
    { value: 'TL', label: 'Timor-Leste' },
    { value: 'TG', label: 'Togo' },
    { value: 'TK', label: 'Tokelau' },
    { value: 'TO', label: 'Tonga' },
    { value: 'TT', label: 'Trinidad and Tobago' },
    { value: 'TN', label: 'Tunisia' },
    { value: 'TM', label: 'Turkmenistan' },
    { value: 'TC', label: 'Turks and Caicos Islands' },
    { value: 'TV', label: 'Tuvalu' },
    { value: 'UG', label: 'Uganda' },
    { value: 'UM', label: 'United States Minor Outlying Islands' },
    { value: 'UY', label: 'Uruguay' },
    { value: 'UZ', label: 'Uzbekistan' },
    { value: 'VU', label: 'Vanuatu' },
    { value: 'VN', label: 'Viet Nam' },
    { value: 'VG', label: 'Virgin Islands, British' },
    { value: 'VI', label: 'Virgin Islands, U.s.' },
    { value: 'WF', label: 'Wallis and Futuna' },
    { value: 'EH', label: 'Western Sahara' },
    { value: 'YE', label: 'Yemen' },
    { value: 'ZM', label: 'Zambia' },
    { value: 'ZW', label: 'Zimbabwe' }
  ];
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [value, setValue] = useState('in');
  const handleChangeCountryName = (event) => {
    setValue(event.target.value);
  };

  const Dropdown = ({ label, value, options, onChange }) => {
    return (
      <label  style={{borderRadius:"5px", padding:"10px", margin:"10px", backgroundColor:"#ce0d0d", color:"white", width:"200px", border:"none"}}>
        {label}
        <select style={{ backgroundColor:"#ce0d0d", border:"none" , padding:"0px", margin:"0px", color:"white"}} value={value} onChange={onChange}>
          {options.map((option,i) => (
           <>
           <option value={option.value}>{option.label} {option.i} </option>
            <span>{option.i}</span>
           </>
          ))}
        </select>
      </label>
    );
  };


  return (
    <>
      <div>
        <Hero
          info = {"Top 53 country+ all country"}
          cat={cat}
          title=" " i="2"
          newsCat={cat.charAt(0).toUpperCase() + cat.slice(1)}
          countryName={<Dropdown
            options={options}
            value={value}
            onChange={handleChangeCountryName}
          />}
        />
        {value.toLowerCase()}
      </div>
      <div className='container my-4 ' >
        <div className='container my-2 d-flex justify-content-center align-items-center flex-column my-3' style={{ minHeight: "100vh" }}>
          {data ? data.map((item, index) => (
            <>
              <div className="container my-3 p-3" style={{ width: "600px", boxShadow: "2px 2px 20px silver", borderRadius: "10px" }}>
                <h5 className='my-1 postHeadStyle' >{item.title}</h5>
                <div className='d-flex justify-content-center align-items-center flex-column my-3'>
                  <img src={item.urlToImage} alt="Image not found" className='img-fluid ' style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                </div>
                <p className='my-1'> {item.content} </p>
                <div className='mt-3'>
                  <a href={item.url} target="_blank" className='postViewMoreStyle mt-1' >View More</a>
                </div>
              </div>
            </>
          )) : "Loading..."}
        </div>
      </div>
    </>
  )
}
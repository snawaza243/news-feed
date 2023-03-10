import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { createContext } from "react";
import ReactDark from '../pages/ReactDark';
import 'react-dropdown/style.css';
import { countries } from 'country-flag-icons'
import { Dropdown } from './FetchData';

export const Navbar = () => {

    const styleDark = [{
        backgroundColor: "#000",
        color: "#fff"
    }]


    function myFunction(e) {
        e.preventDefault();
        var element = document.body;
        element.classList.toggle(styleDark);
    }

    const options = [
        { value: 'AX', label: 'Aland Islands' },
        { value: 'AL', label: 'Albania' },
        { value: 'DZ', label: 'Algeria' },
        { value: 'AS', label: 'American Samoa' },
        { value: 'AD', label: 'Andorra' },
        { value: 'AO', label: 'Angola' },
        { value: 'AI', label: 'Anguilla' },
        { value: 'AQ', label: 'Antarctica' },
        { value: 'AG', label: 'Antigua and Barbuda' },
        { value: 'AR', label: 'Argentina' },
        { value: 'AM', label: 'Armenia' },
        { value: 'AW', label: 'Aruba' },
        { value: 'AU', label: 'Australia' },
        { value: 'AT', label: 'Austria' },
        { value: 'AZ', label: 'Azerbaijan' },
        { value: 'BS', label: 'Bahamas' },
        { value: 'BH', label: 'Bahrain' },
        { value: 'BD', label: 'Bangladesh' },
        { value: 'BB', label: 'Barbados' },
        { value: 'BY', label: 'Belarus' },
        { value: 'BE', label: 'Belgium' },
        { value: 'BZ', label: 'Belize' },
        { value: 'BJ', label: 'Benin' },
        { value: 'BM', label: 'Bermuda' },
        { value: 'BT', label: 'Bhutan' },
        { value: 'BO', label: 'Bolivia' },
        { value: 'BQ', label: 'Bonaire, Sint Eustatius and Saba' },
        { value: 'BA', label: 'Bosnia and Herzegovina' },
        { value: 'BW', label: 'Botswana' },
        { value: 'BV', label: 'Bouvet Island' },
        { value: 'BR', label: 'Brazil' },
        { value: 'IO', label: 'British Indian Ocean Territory' },
        { value: 'BN', label: 'Brunei Darussalam' },
        { value: 'BG', label: 'Bulgaria' },
        { value: 'BF', label: 'Burkina Faso' },
        { value: 'BI', label: 'Burundi' },
        { value: 'KH', label: 'Cambodia' },
        { value: 'CM', label: 'Cameroon' },
        { value: 'CA', label: 'Canada' },
        { value: 'CV', label: 'Cape Verde' },
        { value: 'KY', label: 'Cayman Islands' },
        { value: 'CF', label: 'Central African Republic' },
        { value: 'TD', label: 'Chad' },
        { value: 'CL', label: 'Chile' },
        { value: 'CN', label: 'China' },
        { value: 'CX', label: 'Christmas Island' },
        { value: 'CC', label: 'Cocos (Keeling) Islands' },
        { value: 'CO', label: 'Colombia' },
        { value: 'KM', label: 'Comoros' },
        { value: 'CG', label: 'Congo' },
        { value: 'CD', label: 'Congo, Democratic Republic of the Congo' },
        { value: 'CK', label: 'Cook Islands' },
        { value: 'CR', label: 'Costa Rica' },
        { value: 'CI', label: 'Cote D Ivoire' },
        { value: 'HR', label: 'Croatia' },
        { value: 'CU', label: 'Cuba' },
        { value: 'CW', label: 'Curacao' },
        { value: 'CY', label: 'Cyprus' },
        { value: 'CZ', label: 'Czech Republic' },
        { value: 'DK', label: 'Denmark' },
        { value: 'DJ', label: 'Djibouti' },
        { value: 'DM', label: 'Dominica' },
        { value: 'DO', label: 'Dominican Republic' },
        { value: 'EC', label: 'Ecuador' },
        { value: 'EG', label: 'Egypt' },
        { value: 'SV', label: 'El Salvador' },
        { value: 'GQ', label: 'Equatorial Guinea' },
        { value: 'ER', label: 'Eritrea' },
        { value: 'EE', label: 'Estonia' },
        { value: 'ET', label: 'Ethiopia' },
        { value: 'FK', label: 'Falkland Islands (Malvinas)' },
        { value: 'FO', label: 'Faroe Islands' },
        { value: 'FJ', label: 'Fiji' },
        { value: 'FI', label: 'Finland' },
        { value: 'FR', label: 'France' },
        { value: 'GF', label: 'French Guiana' },
        { value: 'PF', label: 'French Polynesia' },
        { value: 'TF', label: 'French Southern Territories' },
        { value: 'GA', label: 'Gabon' },
        { value: 'GM', label: 'Gambia' },
        { value: 'GE', label: 'Georgia' },
        { value: 'DE', label: 'Germany' },
        { value: 'GH', label: 'Ghana' },
        { value: 'GI', label: 'Gibraltar' },
        { value: 'GR', label: 'Greece' },
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
        { value: 'HK', label: 'Hong Kong' },
        { value: 'HU', label: 'Hungary' },
        { value: 'IS', label: 'Iceland' },
        { value: 'IN', label: 'India' },
        { value: 'ID', label: 'Indonesia' },
        { value: 'IR', label: 'Iran, Islamic Republic of' },
        { value: 'IQ', label: 'Iraq' },
        { value: 'IE', label: 'Ireland' },
        { value: 'IM', label: 'Isle of Man' },
        { value: 'IL', label: 'Israel' },
        { value: 'IT', label: 'Italy' },
        { value: 'JM', label: 'Jamaica' },
        { value: 'JP', label: 'Japan' },
        { value: 'JE', label: 'Jersey' },
        { value: 'JO', label: 'Jordan' },
        { value: 'KZ', label: 'Kazakhstan' },
        { value: 'KE', label: 'Kenya' },
        { value: 'KI', label: 'Kiribati' },
        { value: 'KP', label: 'Korea, Democratic Peoples Republic of' },
        { value: 'KR', label: 'Korea, Republic of' },
        { value: 'XK', label: 'Kosovo' },
        { value: 'KW', label: 'Kuwait' },
        { value: 'KG', label: 'Kyrgyzstan' },
        { value: 'LA', label: 'Lao Peoples Democratic Republic' },
        { value: 'LV', label: 'Latvia' },
        { value: 'LB', label: 'Lebanon' },
        { value: 'LS', label: 'Lesotho' },
        { value: 'LR', label: 'Liberia' },
        { value: 'LY', label: 'Libyan Arab Jamahiriya' },
        { value: 'LI', label: 'Liechtenstein' },
        { value: 'LT', label: 'Lithuania' },
        { value: 'LU', label: 'Luxembourg' },
        { value: 'MO', label: 'Macao' },
        { value: 'MK', label: 'Macedonia, the Former Yugoslav Republic ' },
        { value: 'MG', label: 'Madagascar' },
        { value: 'MW', label: 'Malawi' },
        { value: 'MY', label: 'Malaysia' },
        { value: 'MV', label: 'Maldives' },
        { value: 'ML', label: 'Mali' },
        { value: 'MT', label: 'Malta' },
        { value: 'MH', label: 'Marshall Islands' },
        { value: 'MQ', label: 'Martinique' },
        { value: 'MR', label: 'Mauritania' },
        { value: 'MU', label: 'Mauritius' },
        { value: 'YT', label: 'Mayotte' },
        { value: 'MX', label: 'Mexico' },
        { value: 'FM', label: 'Micronesia, Federated States of' },
        { value: 'MD', label: 'Moldova, Republic of' },
        { value: 'MC', label: 'Monaco' },
        { value: 'MN', label: 'Mongolia' },
        { value: 'ME', label: 'Montenegro' },
        { value: 'MS', label: 'Montserrat' },
        { value: 'MA', label: 'Morocco' },
        { value: 'MZ', label: 'Mozambique' },
        { value: 'MM', label: 'Myanmar' },
        { value: 'NA', label: 'Namibia' },
        { value: 'NR', label: 'Nauru' },
        { value: 'NP', label: 'Nepal' },
        { value: 'NL', label: 'Netherlands' },
        { value: 'AN', label: 'Netherlands Antilles' },
        { value: 'NC', label: 'New Caledonia' },
        { value: 'NZ', label: 'New Zealand' },
        { value: 'NI', label: 'Nicaragua' },
        { value: 'NE', label: 'Niger' },
        { value: 'NG', label: 'Nigeria' },
        { value: 'NU', label: 'Niue' },
        { value: 'NF', label: 'Norfolk Island' },
        { value: 'MP', label: 'Northern Mariana Islands' },
        { value: 'NO', label: 'Norway' },
        { value: 'OM', label: 'Oman' },
        { value: 'PK', label: 'Pakistan' },
        { value: 'PW', label: 'Palau' },
        { value: 'PS', label: 'Palestinian Territory, Occupied' },
        { value: 'PA', label: 'Panama' },
        { value: 'PG', label: 'Papua New Guinea' },
        { value: 'PY', label: 'Paraguay' },
        { value: 'PE', label: 'Peru' },
        { value: 'PH', label: 'Philippines' },
        { value: 'PN', label: 'Pitcairn' },
        { value: 'PL', label: 'Poland' },
        { value: 'PT', label: 'Portugal' },
        { value: 'PR', label: 'Puerto Rico' },
        { value: 'QA', label: 'Qatar' },
        { value: 'RE', label: 'Reunion' },
        { value: 'RO', label: 'Romania' },
        { value: 'RU', label: 'Russian Federation' },
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
        { value: 'SA', label: 'Saudi Arabia' },
        { value: 'SN', label: 'Senegal' },
        { value: 'RS', label: 'Serbia' },
        { value: 'CS', label: 'Serbia and Montenegro' },
        { value: 'SC', label: 'Seychelles' },
        { value: 'SL', label: 'Sierra Leone' },
        { value: 'SG', label: 'Singapore' },
        { value: 'SX', label: 'Sint Maarten' },
        { value: 'SK', label: 'Slovakia' },
        { value: 'SI', label: 'Slovenia' },
        { value: 'SB', label: 'Solomon Islands' },
        { value: 'SO', label: 'Somalia' },
        { value: 'ZA', label: 'South Africa' },
        { value: 'GS', label: 'South Georgia and the South Sandwich ' },
        { value: 'SS', label: 'South Sudan' },
        { value: 'ES', label: 'Spain' },
        { value: 'LK', label: 'Sri Lanka' },
        { value: 'SD', label: 'Sudan' },
        { value: 'SR', label: 'Suriname' },
        { value: 'SJ', label: 'Svalbard and Jan Mayen' },
        { value: 'SZ', label: 'Swaziland' },
        { value: 'SE', label: 'Sweden' },
        { value: 'CH', label: 'Switzerland' },
        { value: 'SY', label: 'Syrian Arab Republic' },
        { value: 'TW', label: 'Taiwan, Province of China' },
        { value: 'TJ', label: 'Tajikistan' },
        { value: 'TZ', label: 'Tanzania, United Republic of' },
        { value: 'TH', label: 'Thailand' },
        { value: 'TL', label: 'Timor-Leste' },
        { value: 'TG', label: 'Togo' },
        { value: 'TK', label: 'Tokelau' },
        { value: 'TO', label: 'Tonga' },
        { value: 'TT', label: 'Trinidad and Tobago' },
        { value: 'TN', label: 'Tunisia' },
        { value: 'TR', label: 'Turkey' },
        { value: 'TM', label: 'Turkmenistan' },
        { value: 'TC', label: 'Turks and Caicos Islands' },
        { value: 'TV', label: 'Tuvalu' },
        { value: 'UG', label: 'Uganda' },
        { value: 'UA', label: 'Ukraine' },
        { value: 'AE', label: 'United Arab Emirates' },
        { value: 'GB', label: 'United Kingdom' },
        { value: 'US', label: 'United States' },
        { value: 'UM', label: 'United States Minor Outlying Islands' },
        { value: 'UY', label: 'Uruguay' },
        { value: 'UZ', label: 'Uzbekistan' },
        { value: 'VU', label: 'Vanuatu' },
        { value: 'VE', label: 'Venezuela' },
        { value: 'VN', label: 'Viet Nam' },
        { value: 'VG', label: 'Virgin Islands, British' },
        { value: 'VI', label: 'Virgin Islands, U.s.' },
        { value: 'WF', label: 'Wallis and Futuna' },
        { value: 'EH', label: 'Western Sahara' },
        { value: 'YE', label: 'Yemen' },
        { value: 'ZM', label: 'Zambia' },
        { value: 'ZW', label: 'Zimbabwe' }
    ];

     const [value, setValue] = useState('in');



    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary m-0 p-0">
                <div className="container-fluid bg-light">
                    <Link className="navbar-brand text-danger border p-2 m-2 shadow myAmin" to="/"><b>NEWS Feed</b></Link>
                    <button className="navbar-toggler m-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ backgroundColor: "#ce0d0d;" }}>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li>
        {/* <Dropdown/> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
                            </li>
                            <li style={{ margin: "0 5px" }}>
                                <Link className="nav-link active pageText '" aria-current="page" to="./post" style={{ color: "white", }}>Post News</Link>
                            </li>
                            <li className="nav-item">
                            </li>
                            <li className="nav-item ">
                                < ReactDark />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default function ThemeContextWrapper(props) {
    const [theme, setTheme] = useState(themes.dark);

    function changeTheme(theme) {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.light:
                document.body.classList.add('white-content');
                break;
            case themes.dark:
            default:
                document.body.classList.remove('white-content');
                break;
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}


export const themes = {
    dark: "",
    light: "white-content",
};

export const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: () => { },
});

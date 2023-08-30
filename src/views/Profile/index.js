import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '../../components/Form/CustomTextField';
import { useAddSwotAnalysis } from '../../hooks/useSwotAnalysis';

export default function Profile() {
  const navigate = useNavigate();
  const onSuccess = () => {
    navigate(-1);
  };
  const { mutate: addSwotAnalysis } = useAddSwotAnalysis(onSuccess);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('data', data);
    addSwotAnalysis({
      data,
    });
  };
  return (
    <main className='main-content mt-1 border-radius-lg '>
       <div class="container-fluid">
        
        <div class="page-header card min-height-250 ">
            <span class="mask bg-gradient-dark opacity-6"></span>
        </div>
        <div class="mx-4 mt-n5 overflow-hidden">
            <div class="row gx-4">
                <div class="col-auto">
                    <div class="avatar rounded-circle avatar-xxl position-relative border-avatar">
                                                <img src="./TechFertile-profile_files/user-avatar-placeholder.png" class="w-100 border-radius-lg shadow-sm" />
                        
                    </div>
                </div>
                <div class="col-auto my-auto">
                    <div class="h-100">
                        <h5 class="mb-1 mt-5">
                            Kartik Choudhary
                        </h5>
                        <p class="mb-0  text-sm">
                            alapindia.in@gmail.com
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                    <div class="nav-wrapper position-relative end-0">
                        <ul class="nav nav-pills nav-fill p-1 bg-transparent" role="tablist">
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row  mb-5">
            <div class="col-md-4">
                <div class="card mt-4">
    
                    <div class="card-body">
    
                        <h5 class="fw-bolder mb-4">Basic Info</h5>
    
                        <ul class="list-group">
                            <li class="list-group-item border-0 ps-0 pt-0 text-sm"><strong class="text-dark">Full Name:</strong>
                                Kartik Choudhary
                            </li>
                            <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Phone Number:</strong>
                                
                            </li>
                            <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Email:</strong> alapindia.in@gmail.com</li>
                            <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Account Created:</strong> Nov 14 2022 04:57 PM
                            </li>
                        </ul>
                        <a class="btn btn-info btn-sm mb-0 mt-3" href="https://techfertile.patcognos.com/user-edit/7">Edit</a>
    
                    </div>
                </div>
            </div>
    
            <div class="col-md-8 mt-lg-0 mt-4">
                <form enctype="multipart/form-data" action="https://techfertile.patcognos.com/profile" method="post">
    
                                    <div class="card mt-4" id="basic-info">
    
                        <div class="card-header">
                            <h5>Details</h5>
                        </div>
    
                        <div class="card-body pt-0">
                            <div class="row">
                                <div class="col-6">
                                    <label class="form-label">First Name</label>
                                    <div class="input-group">
                                        <input id="firstName" name="first_name" value="Kartik" class="form-control" type="text" placeholder="Alec" required="required" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <label class="form-label">Last Name</label>
                                    <div class="input-group">
                                        <input id="lastName" name="last_name" value="Choudhary" class="form-control" type="text" required="required" />
                                    </div>
                                </div>
                            </div>
    
                            <div class="row">
                                <div class="col-6">
                                    <label class="form-label mt-4">Email/Username</label>
                                    <div class="input-group">
                                        <input id="email" name="email" value="alapindia.in@gmail.com" class="form-control" type="email" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <label class="form-label mt-4">Phone Number</label>
                                    <div class="input-group">
                                        <input id="phone" name="phone_number" value="" class="form-control" type="number" />
                                    </div>
                                </div>
                            </div>
    
                            <div class="row">
                                <div class="col-md-6 align-self-center">
                                    <label class="form-label  mt-4">Language</label>
                                    <select class="form-control select2" name="language" id="choices-language">
    
                                                                                <option value="en">English</option>
                                                                                <option value="it">Italian</option>
                                                                                <option value="ro">Romanian</option>
                                                                                <option value="fr">French</option>
                                                                                <option value="zh_cn">Chinese</option>
                                                                                <option value="pt_br">Portuguese(Brazil)</option>
                                                                        </select>
                                </div>
                                <div class="col-md-6 align-self-center">
                                    <div>
                                        <label for="photo_file" class="form-label mt-4">Upload photo</label>
                                        <input class="form-control" name="photo" type="file" id="logo_file" />
                                    </div>
                                </div>
                            </div>
    
                            <div class="mt-3">
                                <label for="timezone">Timezone</label>
                                <select class="form-control select2" id="timezone" name="timezone">
                                    <option value="">Select</option>
                                                                        <option value="Pacific/Midway">(GMT-11:00) Pacific, Midway</option>
                                                                        <option value="Pacific/Niue">(GMT-11:00) Pacific, Niue</option>
                                                                        <option value="Pacific/Pago_Pago">(GMT-11:00) Pacific, Pago Pago</option>
                                                                        <option value="America/Adak">(GMT-10:00) America, Adak</option>
                                                                        <option value="Pacific/Honolulu">(GMT-10:00) Pacific, Honolulu</option>
                                                                        <option value="Pacific/Rarotonga">(GMT-10:00) Pacific, Rarotonga</option>
                                                                        <option value="Pacific/Tahiti">(GMT-10:00) Pacific, Tahiti</option>
                                                                        <option value="Pacific/Marquesas">(GMT-09:30) Pacific, Marquesas</option>
                                                                        <option value="America/Anchorage">(GMT-09:00) America, Anchorage</option>
                                                                        <option value="America/Juneau">(GMT-09:00) America, Juneau</option>
                                                                        <option value="America/Metlakatla">(GMT-09:00) America, Metlakatla</option>
                                                                        <option value="America/Nome">(GMT-09:00) America, Nome</option>
                                                                        <option value="America/Sitka">(GMT-09:00) America, Sitka</option>
                                                                        <option value="America/Yakutat">(GMT-09:00) America, Yakutat</option>
                                                                        <option value="Pacific/Gambier">(GMT-09:00) Pacific, Gambier</option>
                                                                        <option value="America/Los_Angeles">(GMT-08:00) America, Los Angeles</option>
                                                                        <option value="America/Tijuana">(GMT-08:00) America, Tijuana</option>
                                                                        <option value="America/Vancouver">(GMT-08:00) America, Vancouver</option>
                                                                        <option value="Pacific/Pitcairn">(GMT-08:00) Pacific, Pitcairn</option>
                                                                        <option value="America/Boise">(GMT-07:00) America, Boise</option>
                                                                        <option value="America/Cambridge_Bay">(GMT-07:00) America, Cambridge Bay</option>
                                                                        <option value="America/Creston">(GMT-07:00) America, Creston</option>
                                                                        <option value="America/Dawson">(GMT-07:00) America, Dawson</option>
                                                                        <option value="America/Dawson_Creek">(GMT-07:00) America, Dawson Creek</option>
                                                                        <option value="America/Denver">(GMT-07:00) America, Denver</option>
                                                                        <option value="America/Edmonton">(GMT-07:00) America, Edmonton</option>
                                                                        <option value="America/Fort_Nelson">(GMT-07:00) America, Fort Nelson</option>
                                                                        <option value="America/Hermosillo">(GMT-07:00) America, Hermosillo</option>
                                                                        <option value="America/Inuvik">(GMT-07:00) America, Inuvik</option>
                                                                        <option value="America/Mazatlan">(GMT-07:00) America, Mazatlan</option>
                                                                        <option value="America/Phoenix">(GMT-07:00) America, Phoenix</option>
                                                                        <option value="America/Whitehorse">(GMT-07:00) America, Whitehorse</option>
                                                                        <option value="America/Yellowknife">(GMT-07:00) America, Yellowknife</option>
                                                                        <option value="America/Bahia_Banderas">(GMT-06:00) America, Bahia Banderas</option>
                                                                        <option value="America/Belize">(GMT-06:00) America, Belize</option>
                                                                        <option value="America/Chicago">(GMT-06:00) America, Chicago</option>
                                                                        <option value="America/Chihuahua">(GMT-06:00) America, Chihuahua</option>
                                                                        <option value="America/Costa_Rica">(GMT-06:00) America, Costa Rica</option>
                                                                        <option value="America/El_Salvador">(GMT-06:00) America, El Salvador</option>
                                                                        <option value="America/Guatemala">(GMT-06:00) America, Guatemala</option>
                                                                        <option value="America/Indiana/Knox">(GMT-06:00) America, Indiana, Knox</option>
                                                                        <option value="America/Indiana/Tell_City">(GMT-06:00) America, Indiana, Tell City</option>
                                                                        <option value="America/Managua">(GMT-06:00) America, Managua</option>
                                                                        <option value="America/Matamoros">(GMT-06:00) America, Matamoros</option>
                                                                        <option value="America/Menominee">(GMT-06:00) America, Menominee</option>
                                                                        <option value="America/Merida">(GMT-06:00) America, Merida</option>
                                                                        <option value="America/Mexico_City">(GMT-06:00) America, Mexico City</option>
                                                                        <option value="America/Monterrey">(GMT-06:00) America, Monterrey</option>
                                                                        <option value="America/North_Dakota/Beulah">(GMT-06:00) America, North Dakota, Beulah</option>
                                                                        <option value="America/North_Dakota/Center">(GMT-06:00) America, North Dakota, Center</option>
                                                                        <option value="America/North_Dakota/New_Salem">(GMT-06:00) America, North Dakota, New Salem</option>
                                                                        <option value="America/Ojinaga">(GMT-06:00) America, Ojinaga</option>
                                                                        <option value="America/Rankin_Inlet">(GMT-06:00) America, Rankin Inlet</option>
                                                                        <option value="America/Regina">(GMT-06:00) America, Regina</option>
                                                                        <option value="America/Resolute">(GMT-06:00) America, Resolute</option>
                                                                        <option value="America/Swift_Current">(GMT-06:00) America, Swift Current</option>
                                                                        <option value="America/Tegucigalpa">(GMT-06:00) America, Tegucigalpa</option>
                                                                        <option value="America/Winnipeg">(GMT-06:00) America, Winnipeg</option>
                                                                        <option value="Pacific/Galapagos">(GMT-06:00) Pacific, Galapagos</option>
                                                                        <option value="America/Atikokan">(GMT-05:00) America, Atikokan</option>
                                                                        <option value="America/Bogota">(GMT-05:00) America, Bogota</option>
                                                                        <option value="America/Cancun">(GMT-05:00) America, Cancun</option>
                                                                        <option value="America/Cayman">(GMT-05:00) America, Cayman</option>
                                                                        <option value="America/Detroit">(GMT-05:00) America, Detroit</option>
                                                                        <option value="America/Eirunepe">(GMT-05:00) America, Eirunepe</option>
                                                                        <option value="America/Grand_Turk">(GMT-05:00) America, Grand Turk</option>
                                                                        <option value="America/Guayaquil">(GMT-05:00) America, Guayaquil</option>
                                                                        <option value="America/Havana">(GMT-05:00) America, Havana</option>
                                                                        <option value="America/Indiana/Indianapolis">(GMT-05:00) America, Indiana, Indianapolis</option>
                                                                        <option value="America/Indiana/Marengo">(GMT-05:00) America, Indiana, Marengo</option>
                                                                        <option value="America/Indiana/Petersburg">(GMT-05:00) America, Indiana, Petersburg</option>
                                                                        <option value="America/Indiana/Vevay">(GMT-05:00) America, Indiana, Vevay</option>
                                                                        <option value="America/Indiana/Vincennes">(GMT-05:00) America, Indiana, Vincennes</option>
                                                                        <option value="America/Indiana/Winamac">(GMT-05:00) America, Indiana, Winamac</option>
                                                                        <option value="America/Iqaluit">(GMT-05:00) America, Iqaluit</option>
                                                                        <option value="America/Jamaica">(GMT-05:00) America, Jamaica</option>
                                                                        <option value="America/Kentucky/Louisville">(GMT-05:00) America, Kentucky, Louisville</option>
                                                                        <option value="America/Kentucky/Monticello">(GMT-05:00) America, Kentucky, Monticello</option>
                                                                        <option value="America/Lima">(GMT-05:00) America, Lima</option>
                                                                        <option value="America/Nassau">(GMT-05:00) America, Nassau</option>
                                                                        <option value="America/New_York">(GMT-05:00) America, New York</option>
                                                                        <option value="America/Panama">(GMT-05:00) America, Panama</option>
                                                                        <option value="America/Pangnirtung">(GMT-05:00) America, Pangnirtung</option>
                                                                        <option value="America/Port-au-Prince">(GMT-05:00) America, Port-au-Prince</option>
                                                                        <option value="America/Rio_Branco">(GMT-05:00) America, Rio Branco</option>
                                                                        <option value="America/Toronto">(GMT-05:00) America, Toronto</option>
                                                                        <option value="Pacific/Easter">(GMT-05:00) Pacific, Easter</option>
                                                                        <option value="America/Anguilla">(GMT-04:00) America, Anguilla</option>
                                                                        <option value="America/Antigua">(GMT-04:00) America, Antigua</option>
                                                                        <option value="America/Aruba">(GMT-04:00) America, Aruba</option>
                                                                        <option value="America/Barbados">(GMT-04:00) America, Barbados</option>
                                                                        <option value="America/Blanc-Sablon">(GMT-04:00) America, Blanc-Sablon</option>
                                                                        <option value="America/Boa_Vista">(GMT-04:00) America, Boa Vista</option>
                                                                        <option value="America/Campo_Grande">(GMT-04:00) America, Campo Grande</option>
                                                                        <option value="America/Caracas">(GMT-04:00) America, Caracas</option>
                                                                        <option value="America/Cuiaba">(GMT-04:00) America, Cuiaba</option>
                                                                        <option value="America/Curacao">(GMT-04:00) America, Curacao</option>
                                                                        <option value="America/Dominica">(GMT-04:00) America, Dominica</option>
                                                                        <option value="America/Glace_Bay">(GMT-04:00) America, Glace Bay</option>
                                                                        <option value="America/Goose_Bay">(GMT-04:00) America, Goose Bay</option>
                                                                        <option value="America/Grenada">(GMT-04:00) America, Grenada</option>
                                                                        <option value="America/Guadeloupe">(GMT-04:00) America, Guadeloupe</option>
                                                                        <option value="America/Guyana">(GMT-04:00) America, Guyana</option>
                                                                        <option value="America/Halifax">(GMT-04:00) America, Halifax</option>
                                                                        <option value="America/Kralendijk">(GMT-04:00) America, Kralendijk</option>
                                                                        <option value="America/La_Paz">(GMT-04:00) America, La Paz</option>
                                                                        <option value="America/Lower_Princes">(GMT-04:00) America, Lower Princes</option>
                                                                        <option value="America/Manaus">(GMT-04:00) America, Manaus</option>
                                                                        <option value="America/Marigot">(GMT-04:00) America, Marigot</option>
                                                                        <option value="America/Martinique">(GMT-04:00) America, Martinique</option>
                                                                        <option value="America/Moncton">(GMT-04:00) America, Moncton</option>
                                                                        <option value="America/Montserrat">(GMT-04:00) America, Montserrat</option>
                                                                        <option value="America/Port_of_Spain">(GMT-04:00) America, Port of Spain</option>
                                                                        <option value="America/Porto_Velho">(GMT-04:00) America, Porto Velho</option>
                                                                        <option value="America/Puerto_Rico">(GMT-04:00) America, Puerto Rico</option>
                                                                        <option value="America/Santo_Domingo">(GMT-04:00) America, Santo Domingo</option>
                                                                        <option value="America/St_Barthelemy">(GMT-04:00) America, St. Barthelemy</option>
                                                                        <option value="America/St_Kitts">(GMT-04:00) America, St. Kitts</option>
                                                                        <option value="America/St_Lucia">(GMT-04:00) America, St. Lucia</option>
                                                                        <option value="America/St_Thomas">(GMT-04:00) America, St. Thomas</option>
                                                                        <option value="America/St_Vincent">(GMT-04:00) America, St. Vincent</option>
                                                                        <option value="America/Thule">(GMT-04:00) America, Thule</option>
                                                                        <option value="America/Tortola">(GMT-04:00) America, Tortola</option>
                                                                        <option value="Atlantic/Bermuda">(GMT-04:00) Atlantic, Bermuda</option>
                                                                        <option value="America/St_Johns">(GMT-03:30) America, St. Johns</option>
                                                                        <option value="America/Araguaina">(GMT-03:00) America, Araguaina</option>
                                                                        <option value="America/Argentina/Buenos_Aires">(GMT-03:00) America, Argentina, Buenos Aires</option>
                                                                        <option value="America/Argentina/Catamarca">(GMT-03:00) America, Argentina, Catamarca</option>
                                                                        <option value="America/Argentina/Cordoba">(GMT-03:00) America, Argentina, Cordoba</option>
                                                                        <option value="America/Argentina/Jujuy">(GMT-03:00) America, Argentina, Jujuy</option>
                                                                        <option value="America/Argentina/La_Rioja">(GMT-03:00) America, Argentina, La Rioja</option>
                                                                        <option value="America/Argentina/Mendoza">(GMT-03:00) America, Argentina, Mendoza</option>
                                                                        <option value="America/Argentina/Rio_Gallegos">(GMT-03:00) America, Argentina, Rio Gallegos</option>
                                                                        <option value="America/Argentina/Salta">(GMT-03:00) America, Argentina, Salta</option>
                                                                        <option value="America/Argentina/San_Juan">(GMT-03:00) America, Argentina, San Juan</option>
                                                                        <option value="America/Argentina/San_Luis">(GMT-03:00) America, Argentina, San Luis</option>
                                                                        <option value="America/Argentina/Tucuman">(GMT-03:00) America, Argentina, Tucuman</option>
                                                                        <option value="America/Argentina/Ushuaia">(GMT-03:00) America, Argentina, Ushuaia</option>
                                                                        <option value="America/Asuncion">(GMT-03:00) America, Asuncion</option>
                                                                        <option value="America/Bahia">(GMT-03:00) America, Bahia</option>
                                                                        <option value="America/Belem">(GMT-03:00) America, Belem</option>
                                                                        <option value="America/Cayenne">(GMT-03:00) America, Cayenne</option>
                                                                        <option value="America/Fortaleza">(GMT-03:00) America, Fortaleza</option>
                                                                        <option value="America/Maceio">(GMT-03:00) America, Maceio</option>
                                                                        <option value="America/Miquelon">(GMT-03:00) America, Miquelon</option>
                                                                        <option value="America/Montevideo">(GMT-03:00) America, Montevideo</option>
                                                                        <option value="America/Nuuk">(GMT-03:00) America, Nuuk</option>
                                                                        <option value="America/Paramaribo">(GMT-03:00) America, Paramaribo</option>
                                                                        <option value="America/Punta_Arenas">(GMT-03:00) America, Punta Arenas</option>
                                                                        <option value="America/Recife">(GMT-03:00) America, Recife</option>
                                                                        <option value="America/Santarem">(GMT-03:00) America, Santarem</option>
                                                                        <option value="America/Santiago">(GMT-03:00) America, Santiago</option>
                                                                        <option value="America/Sao_Paulo">(GMT-03:00) America, Sao Paulo</option>
                                                                        <option value="Antarctica/Palmer">(GMT-03:00) Antarctica, Palmer</option>
                                                                        <option value="Antarctica/Rothera">(GMT-03:00) Antarctica, Rothera</option>
                                                                        <option value="Atlantic/Stanley">(GMT-03:00) Atlantic, Stanley</option>
                                                                        <option value="America/Noronha">(GMT-02:00) America, Noronha</option>
                                                                        <option value="Atlantic/South_Georgia">(GMT-02:00) Atlantic, South Georgia</option>
                                                                        <option value="America/Scoresbysund">(GMT-01:00) America, Scoresbysund</option>
                                                                        <option value="Atlantic/Azores">(GMT-01:00) Atlantic, Azores</option>
                                                                        <option value="Atlantic/Cape_Verde">(GMT-01:00) Atlantic, Cape Verde</option>
                                                                        <option value="Africa/Abidjan">(GMT) Africa, Abidjan</option>
                                                                        <option value="Africa/Accra">(GMT) Africa, Accra</option>
                                                                        <option value="Africa/Bamako">(GMT) Africa, Bamako</option>
                                                                        <option value="Africa/Banjul">(GMT) Africa, Banjul</option>
                                                                        <option value="Africa/Bissau">(GMT) Africa, Bissau</option>
                                                                        <option value="Africa/Conakry">(GMT) Africa, Conakry</option>
                                                                        <option value="Africa/Dakar">(GMT) Africa, Dakar</option>
                                                                        <option value="Africa/Freetown">(GMT) Africa, Freetown</option>
                                                                        <option value="Africa/Lome">(GMT) Africa, Lome</option>
                                                                        <option value="Africa/Monrovia">(GMT) Africa, Monrovia</option>
                                                                        <option value="Africa/Nouakchott">(GMT) Africa, Nouakchott</option>
                                                                        <option value="Africa/Ouagadougou">(GMT) Africa, Ouagadougou</option>
                                                                        <option value="Africa/Sao_Tome">(GMT) Africa, Sao Tome</option>
                                                                        <option value="America/Danmarkshavn">(GMT) America, Danmarkshavn</option>
                                                                        <option value="Antarctica/Troll">(GMT) Antarctica, Troll</option>
                                                                        <option value="Atlantic/Canary">(GMT) Atlantic, Canary</option>
                                                                        <option value="Atlantic/Faroe">(GMT) Atlantic, Faroe</option>
                                                                        <option value="Atlantic/Madeira">(GMT) Atlantic, Madeira</option>
                                                                        <option value="Atlantic/Reykjavik">(GMT) Atlantic, Reykjavik</option>
                                                                        <option value="Atlantic/St_Helena">(GMT) Atlantic, St. Helena</option>
                                                                        <option value="Europe/Dublin">(GMT) Europe, Dublin</option>
                                                                        <option value="Europe/Guernsey">(GMT) Europe, Guernsey</option>
                                                                        <option value="Europe/Isle_of_Man">(GMT) Europe, Isle of Man</option>
                                                                        <option value="Europe/Jersey">(GMT) Europe, Jersey</option>
                                                                        <option value="Europe/Lisbon">(GMT) Europe, Lisbon</option>
                                                                        <option value="Europe/London">(GMT) Europe, London</option>
                                                                        <option value="UTC">(GMT) UTC</option>
                                                                        <option value="Africa/Algiers">(GMT+01:00) Africa, Algiers</option>
                                                                        <option value="Africa/Bangui">(GMT+01:00) Africa, Bangui</option>
                                                                        <option value="Africa/Brazzaville">(GMT+01:00) Africa, Brazzaville</option>
                                                                        <option value="Africa/Casablanca">(GMT+01:00) Africa, Casablanca</option>
                                                                        <option value="Africa/Ceuta">(GMT+01:00) Africa, Ceuta</option>
                                                                        <option value="Africa/Douala">(GMT+01:00) Africa, Douala</option>
                                                                        <option value="Africa/El_Aaiun">(GMT+01:00) Africa, El Aaiun</option>
                                                                        <option value="Africa/Kinshasa">(GMT+01:00) Africa, Kinshasa</option>
                                                                        <option value="Africa/Lagos">(GMT+01:00) Africa, Lagos</option>
                                                                        <option value="Africa/Libreville">(GMT+01:00) Africa, Libreville</option>
                                                                        <option value="Africa/Luanda">(GMT+01:00) Africa, Luanda</option>
                                                                        <option value="Africa/Malabo">(GMT+01:00) Africa, Malabo</option>
                                                                        <option value="Africa/Ndjamena">(GMT+01:00) Africa, Ndjamena</option>
                                                                        <option value="Africa/Niamey">(GMT+01:00) Africa, Niamey</option>
                                                                        <option value="Africa/Porto-Novo">(GMT+01:00) Africa, Porto-Novo</option>
                                                                        <option value="Africa/Tunis">(GMT+01:00) Africa, Tunis</option>
                                                                        <option value="Arctic/Longyearbyen">(GMT+01:00) Arctic, Longyearbyen</option>
                                                                        <option value="Europe/Amsterdam">(GMT+01:00) Europe, Amsterdam</option>
                                                                        <option value="Europe/Andorra">(GMT+01:00) Europe, Andorra</option>
                                                                        <option value="Europe/Belgrade">(GMT+01:00) Europe, Belgrade</option>
                                                                        <option value="Europe/Berlin">(GMT+01:00) Europe, Berlin</option>
                                                                        <option value="Europe/Bratislava">(GMT+01:00) Europe, Bratislava</option>
                                                                        <option value="Europe/Brussels">(GMT+01:00) Europe, Brussels</option>
                                                                        <option value="Europe/Budapest">(GMT+01:00) Europe, Budapest</option>
                                                                        <option value="Europe/Busingen">(GMT+01:00) Europe, Busingen</option>
                                                                        <option value="Europe/Copenhagen">(GMT+01:00) Europe, Copenhagen</option>
                                                                        <option value="Europe/Gibraltar">(GMT+01:00) Europe, Gibraltar</option>
                                                                        <option value="Europe/Ljubljana">(GMT+01:00) Europe, Ljubljana</option>
                                                                        <option value="Europe/Luxembourg">(GMT+01:00) Europe, Luxembourg</option>
                                                                        <option value="Europe/Madrid">(GMT+01:00) Europe, Madrid</option>
                                                                        <option value="Europe/Malta">(GMT+01:00) Europe, Malta</option>
                                                                        <option value="Europe/Monaco">(GMT+01:00) Europe, Monaco</option>
                                                                        <option value="Europe/Oslo">(GMT+01:00) Europe, Oslo</option>
                                                                        <option value="Europe/Paris">(GMT+01:00) Europe, Paris</option>
                                                                        <option value="Europe/Podgorica">(GMT+01:00) Europe, Podgorica</option>
                                                                        <option value="Europe/Prague">(GMT+01:00) Europe, Prague</option>
                                                                        <option value="Europe/Rome">(GMT+01:00) Europe, Rome</option>
                                                                        <option value="Europe/San_Marino">(GMT+01:00) Europe, San Marino</option>
                                                                        <option value="Europe/Sarajevo">(GMT+01:00) Europe, Sarajevo</option>
                                                                        <option value="Europe/Skopje">(GMT+01:00) Europe, Skopje</option>
                                                                        <option value="Europe/Stockholm">(GMT+01:00) Europe, Stockholm</option>
                                                                        <option value="Europe/Tirane">(GMT+01:00) Europe, Tirane</option>
                                                                        <option value="Europe/Vaduz">(GMT+01:00) Europe, Vaduz</option>
                                                                        <option value="Europe/Vatican">(GMT+01:00) Europe, Vatican</option>
                                                                        <option value="Europe/Vienna">(GMT+01:00) Europe, Vienna</option>
                                                                        <option value="Europe/Warsaw">(GMT+01:00) Europe, Warsaw</option>
                                                                        <option value="Europe/Zagreb">(GMT+01:00) Europe, Zagreb</option>
                                                                        <option value="Europe/Zurich">(GMT+01:00) Europe, Zurich</option>
                                                                        <option value="Africa/Blantyre">(GMT+02:00) Africa, Blantyre</option>
                                                                        <option value="Africa/Bujumbura">(GMT+02:00) Africa, Bujumbura</option>
                                                                        <option value="Africa/Cairo">(GMT+02:00) Africa, Cairo</option>
                                                                        <option value="Africa/Gaborone">(GMT+02:00) Africa, Gaborone</option>
                                                                        <option value="Africa/Harare">(GMT+02:00) Africa, Harare</option>
                                                                        <option value="Africa/Johannesburg">(GMT+02:00) Africa, Johannesburg</option>
                                                                        <option value="Africa/Juba">(GMT+02:00) Africa, Juba</option>
                                                                        <option value="Africa/Khartoum">(GMT+02:00) Africa, Khartoum</option>
                                                                        <option value="Africa/Kigali">(GMT+02:00) Africa, Kigali</option>
                                                                        <option value="Africa/Lubumbashi">(GMT+02:00) Africa, Lubumbashi</option>
                                                                        <option value="Africa/Lusaka">(GMT+02:00) Africa, Lusaka</option>
                                                                        <option value="Africa/Maputo">(GMT+02:00) Africa, Maputo</option>
                                                                        <option value="Africa/Maseru">(GMT+02:00) Africa, Maseru</option>
                                                                        <option value="Africa/Mbabane">(GMT+02:00) Africa, Mbabane</option>
                                                                        <option value="Africa/Tripoli">(GMT+02:00) Africa, Tripoli</option>
                                                                        <option value="Africa/Windhoek">(GMT+02:00) Africa, Windhoek</option>
                                                                        <option value="Asia/Beirut">(GMT+02:00) Asia, Beirut</option>
                                                                        <option value="Asia/Famagusta">(GMT+02:00) Asia, Famagusta</option>
                                                                        <option value="Asia/Gaza">(GMT+02:00) Asia, Gaza</option>
                                                                        <option value="Asia/Hebron">(GMT+02:00) Asia, Hebron</option>
                                                                        <option value="Asia/Jerusalem">(GMT+02:00) Asia, Jerusalem</option>
                                                                        <option value="Asia/Nicosia">(GMT+02:00) Asia, Nicosia</option>
                                                                        <option value="Europe/Athens">(GMT+02:00) Europe, Athens</option>
                                                                        <option value="Europe/Bucharest">(GMT+02:00) Europe, Bucharest</option>
                                                                        <option value="Europe/Chisinau">(GMT+02:00) Europe, Chisinau</option>
                                                                        <option value="Europe/Helsinki">(GMT+02:00) Europe, Helsinki</option>
                                                                        <option value="Europe/Kaliningrad">(GMT+02:00) Europe, Kaliningrad</option>
                                                                        <option value="Europe/Kyiv">(GMT+02:00) Europe, Kyiv</option>
                                                                        <option value="Europe/Mariehamn">(GMT+02:00) Europe, Mariehamn</option>
                                                                        <option value="Europe/Riga">(GMT+02:00) Europe, Riga</option>
                                                                        <option value="Europe/Sofia">(GMT+02:00) Europe, Sofia</option>
                                                                        <option value="Europe/Tallinn">(GMT+02:00) Europe, Tallinn</option>
                                                                        <option value="Europe/Vilnius">(GMT+02:00) Europe, Vilnius</option>
                                                                        <option value="Africa/Addis_Ababa">(GMT+03:00) Africa, Addis Ababa</option>
                                                                        <option value="Africa/Asmara">(GMT+03:00) Africa, Asmara</option>
                                                                        <option value="Africa/Dar_es_Salaam">(GMT+03:00) Africa, Dar es Salaam</option>
                                                                        <option value="Africa/Djibouti">(GMT+03:00) Africa, Djibouti</option>
                                                                        <option value="Africa/Kampala">(GMT+03:00) Africa, Kampala</option>
                                                                        <option value="Africa/Mogadishu">(GMT+03:00) Africa, Mogadishu</option>
                                                                        <option value="Africa/Nairobi">(GMT+03:00) Africa, Nairobi</option>
                                                                        <option value="Antarctica/Syowa">(GMT+03:00) Antarctica, Syowa</option>
                                                                        <option value="Asia/Aden">(GMT+03:00) Asia, Aden</option>
                                                                        <option value="Asia/Amman">(GMT+03:00) Asia, Amman</option>
                                                                        <option value="Asia/Baghdad">(GMT+03:00) Asia, Baghdad</option>
                                                                        <option value="Asia/Bahrain">(GMT+03:00) Asia, Bahrain</option>
                                                                        <option value="Asia/Damascus">(GMT+03:00) Asia, Damascus</option>
                                                                        <option value="Asia/Kuwait">(GMT+03:00) Asia, Kuwait</option>
                                                                        <option value="Asia/Qatar">(GMT+03:00) Asia, Qatar</option>
                                                                        <option value="Asia/Riyadh">(GMT+03:00) Asia, Riyadh</option>
                                                                        <option value="Europe/Istanbul">(GMT+03:00) Europe, Istanbul</option>
                                                                        <option value="Europe/Kirov">(GMT+03:00) Europe, Kirov</option>
                                                                        <option value="Europe/Minsk">(GMT+03:00) Europe, Minsk</option>
                                                                        <option value="Europe/Moscow">(GMT+03:00) Europe, Moscow</option>
                                                                        <option value="Europe/Simferopol">(GMT+03:00) Europe, Simferopol</option>
                                                                        <option value="Europe/Volgograd">(GMT+03:00) Europe, Volgograd</option>
                                                                        <option value="Indian/Antananarivo">(GMT+03:00) Indian, Antananarivo</option>
                                                                        <option value="Indian/Comoro">(GMT+03:00) Indian, Comoro</option>
                                                                        <option value="Indian/Mayotte">(GMT+03:00) Indian, Mayotte</option>
                                                                        <option value="Asia/Tehran">(GMT+03:30) Asia, Tehran</option>
                                                                        <option value="Asia/Baku">(GMT+04:00) Asia, Baku</option>
                                                                        <option value="Asia/Dubai">(GMT+04:00) Asia, Dubai</option>
                                                                        <option value="Asia/Muscat">(GMT+04:00) Asia, Muscat</option>
                                                                        <option value="Asia/Tbilisi">(GMT+04:00) Asia, Tbilisi</option>
                                                                        <option value="Asia/Yerevan">(GMT+04:00) Asia, Yerevan</option>
                                                                        <option value="Europe/Astrakhan">(GMT+04:00) Europe, Astrakhan</option>
                                                                        <option value="Europe/Samara">(GMT+04:00) Europe, Samara</option>
                                                                        <option value="Europe/Saratov">(GMT+04:00) Europe, Saratov</option>
                                                                        <option value="Europe/Ulyanovsk">(GMT+04:00) Europe, Ulyanovsk</option>
                                                                        <option value="Indian/Mahe">(GMT+04:00) Indian, Mahe</option>
                                                                        <option value="Indian/Mauritius">(GMT+04:00) Indian, Mauritius</option>
                                                                        <option value="Indian/Reunion">(GMT+04:00) Indian, Reunion</option>
                                                                        <option value="Asia/Kabul">(GMT+04:30) Asia, Kabul</option>
                                                                        <option value="Antarctica/Mawson">(GMT+05:00) Antarctica, Mawson</option>
                                                                        <option value="Asia/Aqtau">(GMT+05:00) Asia, Aqtau</option>
                                                                        <option value="Asia/Aqtobe">(GMT+05:00) Asia, Aqtobe</option>
                                                                        <option value="Asia/Ashgabat">(GMT+05:00) Asia, Ashgabat</option>
                                                                        <option value="Asia/Atyrau">(GMT+05:00) Asia, Atyrau</option>
                                                                        <option value="Asia/Dushanbe">(GMT+05:00) Asia, Dushanbe</option>
                                                                        <option value="Asia/Karachi">(GMT+05:00) Asia, Karachi</option>
                                                                        <option value="Asia/Oral">(GMT+05:00) Asia, Oral</option>
                                                                        <option value="Asia/Qyzylorda">(GMT+05:00) Asia, Qyzylorda</option>
                                                                        <option value="Asia/Samarkand">(GMT+05:00) Asia, Samarkand</option>
                                                                        <option value="Asia/Tashkent">(GMT+05:00) Asia, Tashkent</option>
                                                                        <option value="Asia/Yekaterinburg">(GMT+05:00) Asia, Yekaterinburg</option>
                                                                        <option value="Indian/Kerguelen">(GMT+05:00) Indian, Kerguelen</option>
                                                                        <option value="Indian/Maldives">(GMT+05:00) Indian, Maldives</option>
                                                                        <option value="Asia/Colombo">(GMT+05:30) Asia, Colombo</option>
                                                                        <option value="Asia/Kolkata">(GMT+05:30) Asia, Kolkata</option>
                                                                        <option value="Asia/Kathmandu">(GMT+05:45) Asia, Kathmandu</option>
                                                                        <option value="Antarctica/Vostok">(GMT+06:00) Antarctica, Vostok</option>
                                                                        <option value="Asia/Almaty">(GMT+06:00) Asia, Almaty</option>
                                                                        <option value="Asia/Bishkek">(GMT+06:00) Asia, Bishkek</option>
                                                                        <option value="Asia/Dhaka">(GMT+06:00) Asia, Dhaka</option>
                                                                        <option value="Asia/Omsk">(GMT+06:00) Asia, Omsk</option>
                                                                        <option value="Asia/Qostanay">(GMT+06:00) Asia, Qostanay</option>
                                                                        <option value="Asia/Thimphu">(GMT+06:00) Asia, Thimphu</option>
                                                                        <option value="Asia/Urumqi">(GMT+06:00) Asia, Urumqi</option>
                                                                        <option value="Indian/Chagos">(GMT+06:00) Indian, Chagos</option>
                                                                        <option value="Asia/Yangon">(GMT+06:30) Asia, Yangon</option>
                                                                        <option value="Indian/Cocos">(GMT+06:30) Indian, Cocos</option>
                                                                        <option value="Antarctica/Davis">(GMT+07:00) Antarctica, Davis</option>
                                                                        <option value="Asia/Bangkok">(GMT+07:00) Asia, Bangkok</option>
                                                                        <option value="Asia/Barnaul">(GMT+07:00) Asia, Barnaul</option>
                                                                        <option value="Asia/Ho_Chi_Minh">(GMT+07:00) Asia, Ho Chi Minh</option>
                                                                        <option value="Asia/Hovd">(GMT+07:00) Asia, Hovd</option>
                                                                        <option value="Asia/Jakarta">(GMT+07:00) Asia, Jakarta</option>
                                                                        <option value="Asia/Krasnoyarsk">(GMT+07:00) Asia, Krasnoyarsk</option>
                                                                        <option value="Asia/Novokuznetsk">(GMT+07:00) Asia, Novokuznetsk</option>
                                                                        <option value="Asia/Novosibirsk">(GMT+07:00) Asia, Novosibirsk</option>
                                                                        <option value="Asia/Phnom_Penh">(GMT+07:00) Asia, Phnom Penh</option>
                                                                        <option value="Asia/Pontianak">(GMT+07:00) Asia, Pontianak</option>
                                                                        <option value="Asia/Tomsk">(GMT+07:00) Asia, Tomsk</option>
                                                                        <option value="Asia/Vientiane">(GMT+07:00) Asia, Vientiane</option>
                                                                        <option value="Indian/Christmas">(GMT+07:00) Indian, Christmas</option>
                                                                        <option value="Asia/Brunei">(GMT+08:00) Asia, Brunei</option>
                                                                        <option value="Asia/Choibalsan">(GMT+08:00) Asia, Choibalsan</option>
                                                                        <option value="Asia/Hong_Kong">(GMT+08:00) Asia, Hong Kong</option>
                                                                        <option value="Asia/Irkutsk">(GMT+08:00) Asia, Irkutsk</option>
                                                                        <option value="Asia/Kuala_Lumpur">(GMT+08:00) Asia, Kuala Lumpur</option>
                                                                        <option value="Asia/Kuching">(GMT+08:00) Asia, Kuching</option>
                                                                        <option value="Asia/Macau">(GMT+08:00) Asia, Macau</option>
                                                                        <option value="Asia/Makassar">(GMT+08:00) Asia, Makassar</option>
                                                                        <option value="Asia/Manila">(GMT+08:00) Asia, Manila</option>
                                                                        <option value="Asia/Shanghai">(GMT+08:00) Asia, Shanghai</option>
                                                                        <option value="Asia/Singapore">(GMT+08:00) Asia, Singapore</option>
                                                                        <option value="Asia/Taipei">(GMT+08:00) Asia, Taipei</option>
                                                                        <option value="Asia/Ulaanbaatar">(GMT+08:00) Asia, Ulaanbaatar</option>
                                                                        <option value="Australia/Perth">(GMT+08:00) Australia, Perth</option>
                                                                        <option value="Australia/Eucla">(GMT+08:45) Australia, Eucla</option>
                                                                        <option value="Asia/Chita">(GMT+09:00) Asia, Chita</option>
                                                                        <option value="Asia/Dili">(GMT+09:00) Asia, Dili</option>
                                                                        <option value="Asia/Jayapura">(GMT+09:00) Asia, Jayapura</option>
                                                                        <option value="Asia/Khandyga">(GMT+09:00) Asia, Khandyga</option>
                                                                        <option value="Asia/Pyongyang">(GMT+09:00) Asia, Pyongyang</option>
                                                                        <option value="Asia/Seoul">(GMT+09:00) Asia, Seoul</option>
                                                                        <option value="Asia/Tokyo">(GMT+09:00) Asia, Tokyo</option>
                                                                        <option value="Asia/Yakutsk">(GMT+09:00) Asia, Yakutsk</option>
                                                                        <option value="Pacific/Palau">(GMT+09:00) Pacific, Palau</option>
                                                                        <option value="Australia/Darwin">(GMT+09:30) Australia, Darwin</option>
                                                                        <option value="Antarctica/DumontDUrville">(GMT+10:00) Antarctica, DumontDUrville</option>
                                                                        <option value="Asia/Ust-Nera">(GMT+10:00) Asia, Ust-Nera</option>
                                                                        <option value="Asia/Vladivostok">(GMT+10:00) Asia, Vladivostok</option>
                                                                        <option value="Australia/Brisbane">(GMT+10:00) Australia, Brisbane</option>
                                                                        <option value="Australia/Lindeman">(GMT+10:00) Australia, Lindeman</option>
                                                                        <option value="Pacific/Chuuk">(GMT+10:00) Pacific, Chuuk</option>
                                                                        <option value="Pacific/Guam">(GMT+10:00) Pacific, Guam</option>
                                                                        <option value="Pacific/Port_Moresby">(GMT+10:00) Pacific, Port Moresby</option>
                                                                        <option value="Pacific/Saipan">(GMT+10:00) Pacific, Saipan</option>
                                                                        <option value="Australia/Adelaide">(GMT+10:30) Australia, Adelaide</option>
                                                                        <option value="Australia/Broken_Hill">(GMT+10:30) Australia, Broken Hill</option>
                                                                        <option value="Antarctica/Casey">(GMT+11:00) Antarctica, Casey</option>
                                                                        <option value="Antarctica/Macquarie">(GMT+11:00) Antarctica, Macquarie</option>
                                                                        <option value="Asia/Magadan">(GMT+11:00) Asia, Magadan</option>
                                                                        <option value="Asia/Sakhalin">(GMT+11:00) Asia, Sakhalin</option>
                                                                        <option value="Asia/Srednekolymsk">(GMT+11:00) Asia, Srednekolymsk</option>
                                                                        <option value="Australia/Hobart">(GMT+11:00) Australia, Hobart</option>
                                                                        <option value="Australia/Lord_Howe">(GMT+11:00) Australia, Lord Howe</option>
                                                                        <option value="Australia/Melbourne">(GMT+11:00) Australia, Melbourne</option>
                                                                        <option value="Australia/Sydney">(GMT+11:00) Australia, Sydney</option>
                                                                        <option value="Pacific/Bougainville">(GMT+11:00) Pacific, Bougainville</option>
                                                                        <option value="Pacific/Efate">(GMT+11:00) Pacific, Efate</option>
                                                                        <option value="Pacific/Guadalcanal">(GMT+11:00) Pacific, Guadalcanal</option>
                                                                        <option value="Pacific/Kosrae">(GMT+11:00) Pacific, Kosrae</option>
                                                                        <option value="Pacific/Noumea">(GMT+11:00) Pacific, Noumea</option>
                                                                        <option value="Pacific/Pohnpei">(GMT+11:00) Pacific, Pohnpei</option>
                                                                        <option value="Asia/Anadyr">(GMT+12:00) Asia, Anadyr</option>
                                                                        <option value="Asia/Kamchatka">(GMT+12:00) Asia, Kamchatka</option>
                                                                        <option value="Pacific/Fiji">(GMT+12:00) Pacific, Fiji</option>
                                                                        <option value="Pacific/Funafuti">(GMT+12:00) Pacific, Funafuti</option>
                                                                        <option value="Pacific/Kwajalein">(GMT+12:00) Pacific, Kwajalein</option>
                                                                        <option value="Pacific/Majuro">(GMT+12:00) Pacific, Majuro</option>
                                                                        <option value="Pacific/Nauru">(GMT+12:00) Pacific, Nauru</option>
                                                                        <option value="Pacific/Norfolk">(GMT+12:00) Pacific, Norfolk</option>
                                                                        <option value="Pacific/Tarawa">(GMT+12:00) Pacific, Tarawa</option>
                                                                        <option value="Pacific/Wake">(GMT+12:00) Pacific, Wake</option>
                                                                        <option value="Pacific/Wallis">(GMT+12:00) Pacific, Wallis</option>
                                                                        <option value="Antarctica/McMurdo">(GMT+13:00) Antarctica, McMurdo</option>
                                                                        <option value="Pacific/Apia">(GMT+13:00) Pacific, Apia</option>
                                                                        <option value="Pacific/Auckland">(GMT+13:00) Pacific, Auckland</option>
                                                                        <option value="Pacific/Fakaofo">(GMT+13:00) Pacific, Fakaofo</option>
                                                                        <option value="Pacific/Kanton">(GMT+13:00) Pacific, Kanton</option>
                                                                        <option value="Pacific/Tongatapu">(GMT+13:00) Pacific, Tongatapu</option>
                                                                        <option value="Pacific/Chatham">(GMT+13:45) Pacific, Chatham</option>
                                                                        <option value="Pacific/Kiritimati">(GMT+14:00) Pacific, Kiritimati</option>
                                    
    
                                </select>
                            </div>
    
    
                            <div class="align-self-center">
                                <div>
                                    <label for="cover_photo" class="form-label mt-3">Upload Cover Photo</label>
                                    <input class="form-control" name="cover_photo" type="file" id="cover_photo_file" />
                                </div>
                            </div>
                            <input type="hidden" name="_token" value="CgAIPwH3U2rndeaqc1UlqzjnVBEU2dKexY11VuY2"/>                        <button type="submit" class="btn btn-info btn-sm float-left mt-4 mb-0">
                                Update info
                            </button>
                        </div>
                    </div>
                </form>
    
                <div class="card mt-4" id="password">
                    <div class="card-header">
                        <h5>Change Password</h5>
                    </div>
                    <form action="https://techfertile.patcognos.com/user-change-password" method="post">
                                            <div class="card-body pt-0">
                            <label class="form-label">Current password</label>
                            <div class="form-group">
                                <input class="form-control" name="password" type="password" />
                            </div>
                            <label class="form-label">New password</label>
                            <div class="form-group">
                                <input class="form-control" name="new_password" type="password"/>
                            </div>
                            <label class="form-label">Confirm new password</label>
                            <div class="form-group">
                                <input class="form-control" name="new_password_confirmation"/>
                            </div>
    
                            <input type="hidden" name="_token" value="CgAIPwH3U2rndeaqc1UlqzjnVBEU2dKexY11VuY2"/>                        <button type="submit" class="btn btn-info btn-sm float-left  mb-0">
                                 Update password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </main>
  );
}

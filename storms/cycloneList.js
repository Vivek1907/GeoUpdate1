var cycloneStatus = {
    five: ' is safe from cyclones',
    four: ' is less prone to cyclones',
    three: ' is moderately prone to cyclones',
    two: ' is highly prone to cyclones',
    one: ' is very highly prone to cyclones'
}

function checkCycloneDistricts(){
    isVeryHighlyProneToCyclones = (stormZone.locality.toUpperCase() == 'NELLORE'||
                                   stormZone.locality.toUpperCase() == 'EAST GODAVARI'||
                                   stormZone.locality.toUpperCase() == 'KRISHNA'||
                                   stormZone.locality.toUpperCase() == 'BALASORE'||
                                   stormZone.locality.toUpperCase() == 'KENDRAPURA'||
                                   stormZone.locality.toUpperCase() == 'JAGATSINGHPUR'||
                                   stormZone.locality.toUpperCase() == 'BHADRAK'||
                                   stormZone.locality.toUpperCase() == 'YANAM'||
                                   stormZone.locality.toUpperCase() == 'SOUTH 24 PARGANAS'||
                                   stormZone.locality.toUpperCase() == 'SOUTH 24-PARGANAS'||
                                   stormZone.locality.toUpperCase() == 'SOUTH-24-PARGANAS'||
                                   stormZone.locality.toUpperCase() == 'SOUTH 24 PARGANA'||
                                   stormZone.locality.toUpperCase() == 'SOUTH 24-PARGANA'||
                                   stormZone.locality.toUpperCase() == 'SOUTH-24-PARGANA'||
                                   stormZone.locality.toUpperCase() == 'SOUTH-24 PARGANAS'||
                                   stormZone.locality.toUpperCase() == 'SOUTH-24 PARGANA'||
                                   stormZone.locality.toUpperCase() == 'MEDINIPUR'||
                                   stormZone.locality.toUpperCase() == 'NORTH 24 PARGANAS'||
                                   stormZone.locality.toUpperCase() == 'NORTH 24-PARGANAS'||
                                   stormZone.locality.toUpperCase() == 'NORTH-24-PARGANAS'||
                                   stormZone.locality.toUpperCase() == 'NORTH 24 PARGANA'||
                                   stormZone.locality.toUpperCase() == 'NORTH 24-PARGANA'||
                                   stormZone.locality.toUpperCase() == 'NORTH-24-PARGANA'||
                                   stormZone.locality.toUpperCase() == 'NORTH-24 PARGANAS'||
                                   stormZone.locality.toUpperCase() == 'NORTH-24 PARGANA'||
                                   stormZone.locality.toUpperCase() == 'KOLKATA'||
                                   stormZone.locality.toUpperCase() == 'CALCUTTA');


    isHighlyProneToCyclones =     (stormZone.locality.toUpperCase() == 'SRIKAKULAM'||
                                   stormZone.locality.toUpperCase() == 'GUNTUR'||
                                   stormZone.locality.toUpperCase() == 'VISAKHAPATNAM'||
                                   stormZone.locality.toUpperCase() == 'VISHAKAPATNAM'||
                                   stormZone.locality.toUpperCase() == 'VIZAG'||
                                   stormZone.locality.toUpperCase() == 'WEST GODAVARI'||
                                   stormZone.locality.toUpperCase() == 'PRAKASAM'||
                                   stormZone.locality.toUpperCase() == 'ONGOLE'||
                                   stormZone.locality.toUpperCase() == 'VIZIANAGARAM'||
                                   stormZone.locality.toUpperCase() == 'DIU'||
                                   stormZone.locality.toUpperCase() == 'DAMAN&DIU'||
                                   stormZone.locality.toUpperCase() == 'DAMAN & DIU'||
                                   stormZone.locality.toUpperCase() == 'DAMAN AND DIU'||
                                   stormZone.locality.toUpperCase() == 'JUNAGADH'||
                                   stormZone.locality.toUpperCase() == 'GIR SOMNATH'||
                                   stormZone.locality.toUpperCase() == 'KUTCH'||
                                   stormZone.locality.toUpperCase() == 'KACHCHH'||
                                   stormZone.locality.toUpperCase() == 'LAKSHADWEEP'||
                                   stormZone.locality.toUpperCase() == 'GANJAM'||
                                   stormZone.locality.toUpperCase() == 'PURI'||
                                   stormZone.locality.toUpperCase() == 'POORI'||
                                   stormZone.locality.toUpperCase() == 'KHORDA'||
                                   stormZone.locality.toUpperCase() == 'BHUBANESHWAR'||
                                   stormZone.locality.toUpperCase() == 'KARAIKAL'||
                                   stormZone.locality.toUpperCase() == 'PUDUKKOTTAI'||
                                   stormZone.locality.toUpperCase() == 'CUDDALORE'||
                                   stormZone.locality.toUpperCase() == 'KANCIPURAM'||
                                   stormZone.locality.toUpperCase() == 'KANCHIPURAM'||
                                   stormZone.locality.toUpperCase() == 'TIRUVARUR'||
                                   stormZone.locality.toUpperCase() == 'THIRUVARUR'||
                                   stormZone.locality.toUpperCase() == 'NAGAPATTINAM'||
                                   stormZone.locality.toUpperCase() == 'NAGAPATNAM'||
                                   stormZone.locality.toUpperCase() == 'NAGAPPATTINAM'||
                                   stormZone.locality.toUpperCase() == 'NAGAPPATNAM'||
                                   stormZone.locality.toUpperCase() == 'CHENNAI'||
                                   stormZone.locality.toUpperCase() == 'MADRAS'||
                                   stormZone.locality.toUpperCase() == 'RAMANATHAPURAM'||
                                   stormZone.locality.toUpperCase() == 'RAMNATHAPURAM'||
                                   stormZone.locality.toUpperCase() == 'TOOTHUKUDI'||
                                   stormZone.locality.toUpperCase() == 'THOOTUKHUDI'||
                                   stormZone.locality.toUpperCase() == 'TOOTHUKHUDI'||
                                   stormZone.locality.toUpperCase() == 'THOOTHUKHUDI'||
                                   stormZone.locality.toUpperCase() == 'TIRUNELVELI'||
                                   stormZone.locality.toUpperCase() == 'THIRUNELVELI'||
                                   stormZone.locality.toUpperCase() == 'CHITTOR'||
                                   stormZone.locality.toUpperCase() == 'CHITTOOR'||
                                   stormZone.locality.toUpperCase() == 'CHITTUR'||
                                   stormZone.locality.toUpperCase() == 'CHITTHOR'||
                                   stormZone.locality.toUpperCase() == 'CHITTHOOR'||
                                   stormZone.locality.toUpperCase() == 'CHITTHUR'||
                                   stormZone.locality.toUpperCase() == 'HOWRAH');

    isModeratelyProneToCyclones = (stormZone.locality.toUpperCase() == 'ANDAMAN'||
                                   stormZone.locality.toUpperCase() == 'NICOBAR'||
                                   stormZone.locality.toUpperCase() == 'ANDAMAN&NICOBBAR'||
                                   stormZone.locality.toUpperCase() == 'ANDAMAN & NICOBAR'||
                                   stormZone.locality.toUpperCase() == 'ANDAMAN AND NICOBAR'||
                                   stormZone.locality.toUpperCase() == 'ANDAMAN ISLANDS'||
                                   stormZone.locality.toUpperCase() == 'NICOBAR ISLANDS'||
                                   stormZone.locality.toUpperCase() == 'ANDAMAN&NICOBAR ISLANDS'||
                                   stormZone.locality.toUpperCase() == 'ANDAMAN & NICOBAR ISLANDS'||
                                   stormZone.locality.toUpperCase() == 'ANDAMAN AND NICOBAR ISLANDS'||
                                   stormZone.locality.toUpperCase() == 'A&N ISLANDS'||
                                   stormZone.locality.toUpperCase() == 'A & N ISLANDS'||
                                   stormZone.locality.toUpperCase() == 'A AND N ISLANDS'||
                                   stormZone.locality.toUpperCase() == 'A&N'||
                                   stormZone.locality.toUpperCase() == 'A & N'||
                                   stormZone.locality.toUpperCase() == 'A AND N'||
                                   stormZone.locality.toUpperCase() == 'AN ISLANDS'||
                                   stormZone.locality.toUpperCase() == 'A/N ISLANDS'||
                                   stormZone.locality.toUpperCase() == 'DAMAN'||
                                   stormZone.locality.toUpperCase() == 'NORTH GOA'||
                                   stormZone.locality.toUpperCase() == 'SOUTH GOA'||
                                   stormZone.locality.toUpperCase() == 'GOA'||
                                   stormZone.locality.toUpperCase() == 'AHMEDABAD'||
                                   stormZone.locality.toUpperCase() == 'BHAVNAGAR'||
                                   stormZone.locality.toUpperCase() == 'AMRELI'||
                                   stormZone.locality.toUpperCase() == 'JAMNAGAR'||
                                   stormZone.locality.toUpperCase() == 'DEVBHOOMI DWARKA'||
                                   stormZone.locality.toUpperCase() == 'ANAND'||
                                   stormZone.locality.toUpperCase() == 'NAVSARI'||
                                   stormZone.locality.toUpperCase() == 'SURAT'||
                                   stormZone.locality.toUpperCase() == 'VALSAD'||
                                   stormZone.locality.toUpperCase() == 'BHARUCH'||
                                   stormZone.locality.toUpperCase() == 'PORBANDAR'||
                                   stormZone.locality.toUpperCase() == 'PAOBANDAR'||
                                   stormZone.locality.toUpperCase() == 'RAJKOT'||
                                   stormZone.locality.toUpperCase() == 'RAJKHOT'||
                                   stormZone.locality.toUpperCase() == 'VADODARA'||
                                   stormZone.locality.toUpperCase() == 'BARODA'||
                                   stormZone.locality.toUpperCase() == 'VADODRA'||
                                   stormZone.locality.toUpperCase() == 'VADODHRA'||
                                   stormZone.locality.toUpperCase() == 'UDUPI'||
                                   stormZone.locality.toUpperCase() == 'UTTARA KANNADA'||
                                   stormZone.locality.toUpperCase() == 'UTTAR KANNADA'||
                                   stormZone.locality.toUpperCase() == 'DAKSHINA KANNADA'||
                                   stormZone.locality.toUpperCase() == 'DAKSHIN KANNADA'||
                                   stormZone.locality.toUpperCase() == 'KOZHIKODE'||
                                   stormZone.locality.toUpperCase() == 'CALICUT'||
                                   stormZone.locality.toUpperCase() == 'MALAPPURAM'||
                                   stormZone.locality.toUpperCase() == 'MALAPURAM'||
                                   stormZone.locality.toUpperCase() == 'THRISSUR'||
                                   stormZone.locality.toUpperCase() == 'TRICHUR'||
                                   stormZone.locality.toUpperCase() == 'THRICHUR'||
                                   stormZone.locality.toUpperCase() == 'TRISSUR'||
                                   stormZone.locality.toUpperCase() == 'NORTH CANARA'||
                                   stormZone.locality.toUpperCase() == 'SOUTH CANARA'||
                                   stormZone.locality.toUpperCase() == 'KANNUR'||
                                   stormZone.locality.toUpperCase() == 'CANNANORE'||
                                   stormZone.locality.toUpperCase() == 'CANANOR'||
                                   stormZone.locality.toUpperCase() == 'KOLLAM'||
                                   stormZone.locality.toUpperCase() == 'QUILON'||
                                   stormZone.locality.toUpperCase() == 'ALAPPUZHA'||
                                   stormZone.locality.toUpperCase() == 'ALAPPAUZHA'||
                                   stormZone.locality.toUpperCase() == 'ALLEPEY'||
                                   stormZone.locality.toUpperCase() == 'THIRUVANATHAPURAM'||
                                   stormZone.locality.toUpperCase() == 'THANE'||
                                   stormZone.locality.toUpperCase() == 'MUMBAI SUBURBAN'||
                                   stormZone.locality.toUpperCase() == 'MUMBAI'||
                                   stormZone.locality.toUpperCase() == 'MUMBAI SUB-URBAN'||
                                   stormZone.locality.toUpperCase() == 'RATNAGIRI'||
                                   stormZone.locality.toUpperCase() == 'RATHNAGIRI'||
                                   stormZone.locality.toUpperCase() == 'RAIGAD'||
                                   stormZone.locality.toUpperCase() == 'RAIGARH'||
                                   stormZone.locality.toUpperCase() == 'SINDHUDURG'||
                                   stormZone.locality.toUpperCase() == 'PONDICHERRY'||
                                   stormZone.locality.toUpperCase() == 'PUDUCHERRY'||
                                   stormZone.locality.toUpperCase() == 'MAHE'||
                                   stormZone.locality.toUpperCase() == 'VILLUPPURAM'||
                                   stormZone.locality.toUpperCase() == 'VILUPURAM'||
                                   stormZone.locality.toUpperCase() == 'VILLUPURAM'||
                                   stormZone.locality.toUpperCase() == 'VILUPPURAM'||
                                   stormZone.locality.toUpperCase() == 'TANJAVUR'||
                                   stormZone.locality.toUpperCase() == 'THANJAVUR'||
                                   stormZone.locality.toUpperCase() == 'TANJAVURU'||
                                   stormZone.locality.toUpperCase() == 'THANJAVURU'||
                                   stormZone.locality.toUpperCase() == 'TANJAVORE'||
                                   stormZone.locality.toUpperCase() == 'THANJAVORE'||
                                   stormZone.locality.toUpperCase() == 'VIZUPURAM'||
                                   stormZone.locality.toUpperCase() == 'TIRUVALLUR'||
                                   stormZone.locality.toUpperCase() == 'THIRUVALLUR'||
                                   stormZone.locality.toUpperCase() == 'THIRUVALORE'||
                                   stormZone.locality.toUpperCase() == 'TIRUVALORE'||
                                   stormZone.locality.toUpperCase() == 'KANYAKUMARI'||
                                   stormZone.locality.toUpperCase() == 'DADRA&NAGAR HAVELI'||
                                   stormZone.locality.toUpperCase() == 'DADRA & NAGAR HAVELI'||
                                   stormZone.locality.toUpperCase() == 'DADRA AND NAGAR HAVELI'||
                                   stormZone.locality.toUpperCase() == 'DADRA'||
                                   stormZone.locality.toUpperCase() == 'NAGAR HAVELI'||
                                   stormZone.locality.toUpperCase() == 'HAVELI'||
                                   stormZone.locality.toUpperCase() == 'MAYURBHANJ'||
                                   stormZone.locality.toUpperCase() == 'CUTTACK'||
                                   stormZone.locality.toUpperCase() == 'NAYAGARH'||
                                   stormZone.locality.toUpperCase() == 'GAJAPATI'||
                                   stormZone.locality.toUpperCase() == 'JAJPUR'||
                                   stormZone.locality.toUpperCase() == 'KEONJHAR'||
                                   stormZone.locality.toUpperCase() == 'HOOGLY'||
                                   stormZone.locality.toUpperCase() == 'HOOGHLY'||
                                   stormZone.locality.toUpperCase() == 'BARDHAMAN'||
                                   stormZone.locality.toUpperCase() == 'BARDAMAN');

    isLessProneToCyclones =       (stormZone.locality.toUpperCase() == 'KASARGOD'||
                                   stormZone.locality.toUpperCase() == 'KASARAGOD'||
                                   stormZone.locality.toUpperCase() == 'ERNAKULAM'||
                                   stormZone.locality.toUpperCase() == 'KOCHI'||
                                   stormZone.locality.toUpperCase() == 'SURENDRA NAGAR'||
                                   stormZone.locality.toUpperCase() == 'KHEDA'||
                                   stormZone.locality.toUpperCase() == 'WAYNAD'||
                                   stormZone.locality.toUpperCase() == 'WAYANAD'||
                                   stormZone.locality.toUpperCase() == 'WAYAND'||
                                   stormZone.locality.toUpperCase() == 'PALLAKAD'||
                                   stormZone.locality.toUpperCase() == 'PALAKAD'||
                                   stormZone.locality.toUpperCase() == 'KOTTYAM'||
                                   stormZone.locality.toUpperCase() == 'KOTTAYAM'||
                                   stormZone.locality.toUpperCase() == 'IDDUKI'||
                                   stormZone.locality.toUpperCase() == 'IDUKKI'||
                                   stormZone.locality.toUpperCase() == 'PATHANAMTHITA'||
                                   stormZone.locality.toUpperCase() == 'DHENKANAL'||
                                   stormZone.locality.toUpperCase() == 'ARIYALUR'||
                                   stormZone.locality.toUpperCase() == 'TIRUVANNAMALAI'||
                                   stormZone.locality.toUpperCase() == 'THIRUVANNAMALAI'||
                                   stormZone.locality.toUpperCase() == 'SIVAGANGA'||
                                   stormZone.locality.toUpperCase() == 'SHIVAGANGA');
 }
function getCycloneDistricts(){

   

  stormZone.subSelect.option('Choose A District');
  stormZone.subSelect.selected('Choose A District')

 if(stormZone.select.value() === 'Andhra Pradesh'){
               
    stormZone.subSelect.option('Chittoor');
    stormZone.subSelect.option('East Godavari');
    stormZone.subSelect.option('Guntur');
    stormZone.subSelect.option('Kadapa');
    stormZone.subSelect.option('Krishna');
    stormZone.subSelect.option('Kurnool');
    stormZone.subSelect.option('Prakasam');
    stormZone.subSelect.option('Nellore');
    stormZone.subSelect.option('Srikakulam');
    stormZone.subSelect.option('Vishakapatnam');
    stormZone.subSelect.option('Vizianagaram');
    stormZone.subSelect.option('West Godavari');
  }

   else if(stormZone.select.value() === 'Arunachal Pradesh'){
    stormZone.subSelect.option('Anjaw');
    stormZone.subSelect.option('Changlang');
    stormZone.subSelect.option('East Kameng');
    stormZone.subSelect.option('East Siang');
    stormZone.subSelect.option('Kamle');
    stormZone.subSelect.option('Kra Daadi');
    stormZone.subSelect.option('Kurung Kumey');
    stormZone.subSelect.option('Lepa Rada');
    stormZone.subSelect.option('Lohit');
    stormZone.subSelect.option('Longding');
    stormZone.subSelect.option('Lower Dibang Valley');
    stormZone.subSelect.option('Lower Siang');
    stormZone.subSelect.option('Lower Subansiri');
    stormZone.subSelect.option('Namasai');
    stormZone.subSelect.option('Pakke-Kessang');
    stormZone.subSelect.option('Papum Pare');
    stormZone.subSelect.option('Shi Yomi');
    stormZone.subSelect.option('Siang');
    stormZone.subSelect.option('Tawang');
    stormZone.subSelect.option('Tirap');
    stormZone.subSelect.option('Upper Dibang Valley');
    stormZone.subSelect.option('Upper Siang');
    stormZone.subSelect.option('Upper Subansiri');
    stormZone.subSelect.option('West Kameng');
    stormZone.subSelect.option('West Siang');
   }

   else if(stormZone.select.value() === 'Assam'){
      stormZone.subSelect.option('Baksa');
      stormZone.subSelect.option('Barpeta');
      stormZone.subSelect.option('Bishwanath');
      stormZone.subSelect.option('Bongaigaon');
      stormZone.subSelect.option('Cachar');
      stormZone.subSelect.option('Charaideo');
      stormZone.subSelect.option('Chirang');
      stormZone.subSelect.option('Darrang');
      stormZone.subSelect.option('Dhemaji');
      stormZone.subSelect.option('Dhubri');
      stormZone.subSelect.option('Dibrugarh');
      stormZone.subSelect.option('Dima Hasao');
      stormZone.subSelect.option('Goalpara');
      stormZone.subSelect.option('Golaghat');
      stormZone.subSelect.option('Guwahati');
      stormZone.subSelect.option('Hailakandi');
      stormZone.subSelect.option('Hojai');
      stormZone.subSelect.option('Jorhat');
      stormZone.subSelect.option('Kamrup');
      stormZone.subSelect.option('Karbi Anglong');
      stormZone.subSelect.option('Karimganj');
      stormZone.subSelect.option('Kokrajhar');
      stormZone.subSelect.option('Lakhimpur');
      stormZone.subSelect.option('Majuli');
      stormZone.subSelect.option('Morigaon');
      stormZone.subSelect.option('Nagaon');
      stormZone.subSelect.option('Nalbari');
      stormZone.subSelect.option('Sivasagar');
      stormZone.subSelect.option('South Salmara');
      stormZone.subSelect.option('Sonitpur');
      stormZone.subSelect.option('Tinsukia');
      stormZone.subSelect.option('Udalguri');
      stormZone.subSelect.option('West Karbi Anglong');
   }

   else if(stormZone.select.value() === 'Bihar'){
    stormZone.subSelect.option('Araria');
    stormZone.subSelect.option('Arwal');
    stormZone.subSelect.option('Aurangabad');
    stormZone.subSelect.option('Banka');
    stormZone.subSelect.option('Begusarai');
    stormZone.subSelect.option('Bhagalpur');
    stormZone.subSelect.option('Bhojpur');
    stormZone.subSelect.option('Buxar');
    stormZone.subSelect.option('Darbhanga');
    stormZone.subSelect.option('East Champaran');
    stormZone.subSelect.option('Gaya');
    stormZone.subSelect.option('Gopalganj');
    stormZone.subSelect.option('Jamui');
    stormZone.subSelect.option('Jehanabad');
    stormZone.subSelect.option('Kaimur');
    stormZone.subSelect.option('Katihar');
    stormZone.subSelect.option('Khagaria');
    stormZone.subSelect.option('Kishanganj');
    stormZone.subSelect.option('Lakhisarai');
    stormZone.subSelect.option('Madhepura');
    stormZone.subSelect.option('Madhubani');
    stormZone.subSelect.option('Munger');
    stormZone.subSelect.option('Muzaffarpur');
    stormZone.subSelect.option('Nalanda');
    stormZone.subSelect.option('Nawada');
    stormZone.subSelect.option('Patna');
    stormZone.subSelect.option('Purnia');
    stormZone.subSelect.option('Rohtas');
    stormZone.subSelect.option('Saharsa');
    stormZone.subSelect.option('Samastipur');
    stormZone.subSelect.option('Saran');
    stormZone.subSelect.option('Sheikhpura');
    stormZone.subSelect.option('Sheohar');
    stormZone.subSelect.option('Sitamarhi');
    stormZone.subSelect.option('Siwan');
    stormZone.subSelect.option('Supaul');
    stormZone.subSelect.option('Vaishali');
    stormZone.subSelect.option('West Champaran');
 }

 else if(stormZone.select.value() === 'Chhattisgarh'){
    stormZone.subSelect.option('Balod');
    stormZone.subSelect.option('Baloda Bazar');
    stormZone.subSelect.option('Balrampur');
    stormZone.subSelect.option('Bastar');
    stormZone.subSelect.option('Bemetara');
    stormZone.subSelect.option('Bijapur');
    stormZone.subSelect.option('Bilaspur');
    stormZone.subSelect.option('Dantewada');
    stormZone.subSelect.option('Dhamtari');
    stormZone.subSelect.option('Durg');
    stormZone.subSelect.option('Gariaband');
    stormZone.subSelect.option('Gaurela');
    stormZone.subSelect.option('Janjgir-Champa');
    stormZone.subSelect.option('Jashpur');
    stormZone.subSelect.option('Kabirdham');
    stormZone.subSelect.option('Kanker');
    stormZone.subSelect.option('Kondagaon');
    stormZone.subSelect.option('Korba');
    stormZone.subSelect.option('Koriya');
    stormZone.subSelect.option('Mahasamund');
    stormZone.subSelect.option('Mungeli');
    stormZone.subSelect.option('Narayanpur');
    stormZone.subSelect.option('Raigarh');
    stormZone.subSelect.option('Raipur');
    stormZone.subSelect.option('Rajnandgaon');
    stormZone.subSelect.option('Sukma');
    stormZone.subSelect.option('Surajpur');
    stormZone.subSelect.option('Surguja');
 }

 else if(stormZone.select.value() === 'Goa'){
    stormZone.subSelect.option('North Goa');
    stormZone.subSelect.option('South Goa');
 }

 else if(stormZone.select.value() === 'Gujarat'){
   stormZone.subSelect.option('Ahmedabad');
   stormZone.subSelect.option('Amreli');
   stormZone.subSelect.option('Anand');
   stormZone.subSelect.option('Aravalli');
   stormZone.subSelect.option('Banaskantha');
   stormZone.subSelect.option('Bharuch');
   stormZone.subSelect.option('Bhavnagar');
   stormZone.subSelect.option('Botad');
   stormZone.subSelect.option('Chotta Udepur');
   stormZone.subSelect.option('Dahod');
   stormZone.subSelect.option('Dang');
   stormZone.subSelect.option('Devbhoomi Dwarka');
   stormZone.subSelect.option('Gandhinagar');
   stormZone.subSelect.option('Gir Somnath');
   stormZone.subSelect.option('Jamnagar');
   stormZone.subSelect.option('Junagadh');
   stormZone.subSelect.option('Kheda');
   stormZone.subSelect.option('Kutch');
   stormZone.subSelect.option('Mahisagar');
   stormZone.subSelect.option('Mehsana');
   stormZone.subSelect.option('Morbi');
   stormZone.subSelect.option('Narmada');
   stormZone.subSelect.option('Navsari');
   stormZone.subSelect.option('Panchmahal');
   stormZone.subSelect.option('Patan');
   stormZone.subSelect.option('Porbandar');
   stormZone.subSelect.option('Rajkot');
   stormZone.subSelect.option('Sabarkantha');
   stormZone.subSelect.option('Surat');
    stormZone.subSelect.option('Surendranagar');
    stormZone.subSelect.option('Tapi');
    stormZone.subSelect.option('Vadodara');
    stormZone.subSelect.option('Valsad');
}

else if(stormZone.select.value() === 'Haryana'){
   stormZone.subSelect.option('Ambala');
   stormZone.subSelect.option('Bhiwani');
   stormZone.subSelect.option('Charki Dadri');
   stormZone.subSelect.option('Faridabad');
   stormZone.subSelect.option('Fatehabad');
   stormZone.subSelect.option('Gurgaon');
   stormZone.subSelect.option('Hissar');
   stormZone.subSelect.option('Jhajjar');
   stormZone.subSelect.option('Jind');
   stormZone.subSelect.option('Kaithal');
   stormZone.subSelect.option('Karnal');
   stormZone.subSelect.option('Kurukshetra');
   stormZone.subSelect.option('Mahendragarh');
   stormZone.subSelect.option('Nuh');
   stormZone.subSelect.option('Palwal');
   stormZone.subSelect.option('Panchkula');
   stormZone.subSelect.option('Panipat');
   stormZone.subSelect.option('Rewari');
   stormZone.subSelect.option('Rohtak');
   stormZone.subSelect.option('Sirsa');
   stormZone.subSelect.option('Sonipat');
   stormZone.subSelect.option('Yamuna Nagar');
}

else if(stormZone.select.value() === 'Himachal Pradesh'){
   stormZone.subSelect.option('Bilaspur');
   stormZone.subSelect.option('Chamba');
   stormZone.subSelect.option('Dharmashala');
   stormZone.subSelect.option('Hamirpur');
   stormZone.subSelect.option('Kinnaur');
   stormZone.subSelect.option('Kullu');
   stormZone.subSelect.option('Lahaul and Spiti');
   stormZone.subSelect.option('Mandi');
   stormZone.subSelect.option('Shimla');
   stormZone.subSelect.option('Srimaur');
   stormZone.subSelect.option('Solan');
   stormZone.subSelect.option('Una');
}

else if(stormZone.select.value() === 'Jharkhand'){
   stormZone.subSelect.option('Bokaro');
   stormZone.subSelect.option('Chatra');
   stormZone.subSelect.option('Deoghar');
   stormZone.subSelect.option('Dhanbad');
   stormZone.subSelect.option('Dumka');
   stormZone.subSelect.option('East Singbhum');
   stormZone.subSelect.option('Garhwa');
   stormZone.subSelect.option('Giridih');
   stormZone.subSelect.option('Godda');
   stormZone.subSelect.option('Gumla');
   stormZone.subSelect.option('Hazaribag');
   stormZone.subSelect.option('Jamtara');
   stormZone.subSelect.option('Khunti');
   stormZone.subSelect.option('Koderma');
   stormZone.subSelect.option('Latehar');
   stormZone.subSelect.option('Lohardaga');
   stormZone.subSelect.option('Pakur');
   stormZone.subSelect.option('Palamu');
   stormZone.subSelect.option('Ramgarh');
   stormZone.subSelect.option('Ranchi');
   stormZone.subSelect.option('Sahibganj');
   stormZone.subSelect.option('Seraikela Kharsawan');
   stormZone.subSelect.option('Simdega');
   stormZone.subSelect.option('West Singhbum');
}

else if(stormZone.select.value() === 'Karnataka'){
   stormZone.subSelect.option('Bagalkot');
   stormZone.subSelect.option('Ballari');
   stormZone.subSelect.option('Belagavi');
   stormZone.subSelect.option('Bangalore Rural');
   stormZone.subSelect.option('Bangalore Urban');
   stormZone.subSelect.option('Bidar');
   stormZone.subSelect.option('Chamarajanagar');
   stormZone.subSelect.option('Chikkaballapur');
   stormZone.subSelect.option('Chikkamagaluru');
   stormZone.subSelect.option('Chitradurga');
   stormZone.subSelect.option('Dakshina Kannada');
   stormZone.subSelect.option('Davangere');
   stormZone.subSelect.option('Dharwad');
   stormZone.subSelect.option('Gadag');
   stormZone.subSelect.option('Gulbarga');
   stormZone.subSelect.option('Hassan');
   stormZone.subSelect.option('Haveri');
   stormZone.subSelect.option('Kodagu');
   stormZone.subSelect.option('Kolar');
   stormZone.subSelect.option('Koppala');
   stormZone.subSelect.option('Mandya');
   stormZone.subSelect.option('Mysuru');
   stormZone.subSelect.option('Raichur');
   stormZone.subSelect.option('Ramanagara');
   stormZone.subSelect.option('Shimoga');
   stormZone.subSelect.option('Tumkur');
   stormZone.subSelect.option('Udupi');
   stormZone.subSelect.option('Uttara Kannada');
   stormZone.subSelect.option('Vijayapur');
   stormZone.subSelect.option('Yadgir');
}

else if(stormZone.select.value() === 'Kerala'){
   stormZone.subSelect.option('Alppuzha');
   stormZone.subSelect.option('Ernakulam');
   stormZone.subSelect.option('Idukki');
   stormZone.subSelect.option('Kannur');
   stormZone.subSelect.option('Kasaragod');
   stormZone.subSelect.option('Kollam');
   stormZone.subSelect.option('Kottayam');
   stormZone.subSelect.option('Kozhikode');
   stormZone.subSelect.option('Mallapuram');
   stormZone.subSelect.option('Palakkad');
   stormZone.subSelect.option('Pathanamthitta');
   stormZone.subSelect.option('Thrissur');
   stormZone.subSelect.option('Thiruvanathapuram');
   stormZone.subSelect.option('Wayanad');
}

else if(stormZone.select.value() === 'Madhya Pradesh'){
   stormZone.subSelect.option('Agar Malwa');
   stormZone.subSelect.option('Alirajpur');
   stormZone.subSelect.option('Anuppur');
   stormZone.subSelect.option('Ashok Nagar');
   stormZone.subSelect.option('Balaghat');
   stormZone.subSelect.option('Barwani');
   stormZone.subSelect.option('Betul');
   stormZone.subSelect.option('Bhind');
   stormZone.subSelect.option('Bhopal');
   stormZone.subSelect.option('Burhanpur');
   stormZone.subSelect.option('Chachaura');
   stormZone.subSelect.option('Chhatarpur');
   stormZone.subSelect.option('Chhindwara');
   stormZone.subSelect.option('Damoh');
   stormZone.subSelect.option('Datia');
   stormZone.subSelect.option('Dewas');
   stormZone.subSelect.option('Dhar');
   stormZone.subSelect.option('Dindori');
   stormZone.subSelect.option('Guna');
   stormZone.subSelect.option('Gwalior');
   stormZone.subSelect.option('Harda');
   stormZone.subSelect.option('Hoshangabad');
   stormZone.subSelect.option('Indore');
   stormZone.subSelect.option('Jabalpur');
   stormZone.subSelect.option('Jhabua');
   stormZone.subSelect.option('Katni');
   stormZone.subSelect.option('Khandwa');
   stormZone.subSelect.option('Khargone');
   stormZone.subSelect.option('Maihar');
   stormZone.subSelect.option('Mandia');
   stormZone.subSelect.option('Mandia');
   stormZone.subSelect.option('Mandsaur');
   stormZone.subSelect.option('Morena');
   stormZone.subSelect.option('Narsinghpur');
   stormZone.subSelect.option('Nagda');
   stormZone.subSelect.option('Neemuch');
   stormZone.subSelect.option('Niwari');
   stormZone.subSelect.option('Panna');
   stormZone.subSelect.option('Raisen');
   stormZone.subSelect.option('Rajgarh');
   stormZone.subSelect.option('Ratlam');
   stormZone.subSelect.option('Rewa');
   stormZone.subSelect.option('Sagar');
   stormZone.subSelect.option('Satna');
   stormZone.subSelect.option('Sehore');
   stormZone.subSelect.option('Seoni');
   stormZone.subSelect.option('Shahdol');
   stormZone.subSelect.option('Shivpur');
   stormZone.subSelect.option('Sidhi');
   stormZone.subSelect.option('Singrauli');
   stormZone.subSelect.option('Tikamgarh');
   stormZone.subSelect.option('Ujjain');
   stormZone.subSelect.option('Umaria');
   stormZone.subSelect.option('Vidisha');
}

else if(stormZone.select.value() === 'Maharashtra'){
   stormZone.subSelect.option('Ahmednagar');
   stormZone.subSelect.option('Akola');
   stormZone.subSelect.option('Amravati');
   stormZone.subSelect.option('Aurangabad');
   stormZone.subSelect.option('Beed');
   stormZone.subSelect.option('Bhandara');
   stormZone.subSelect.option('Buldhana');
   stormZone.subSelect.option('Chandrapur');
   stormZone.subSelect.option('Dhule');
   stormZone.subSelect.option('Gadchiroli');
   stormZone.subSelect.option('Gondia');
   stormZone.subSelect.option('Hingoli');
   stormZone.subSelect.option('Jalgaon');
   stormZone.subSelect.option('Jaina');
   stormZone.subSelect.option('Kolhapur');
   stormZone.subSelect.option('Latur');
   stormZone.subSelect.option('Mumbai City');
   stormZone.subSelect.option('Mumbai Suburban');
   stormZone.subSelect.option('Nanded');
   stormZone.subSelect.option('Nandurbar');
   stormZone.subSelect.option('Nagpur');
   stormZone.subSelect.option('Nashik');
   stormZone.subSelect.option('Osmanabad');
   stormZone.subSelect.option('Palghar');
   stormZone.subSelect.option('Parbhani');
   stormZone.subSelect.option('Pune');
   stormZone.subSelect.option('Ralgad');
   stormZone.subSelect.option('Ratnagiri');
   stormZone.subSelect.option('Sangli');
   stormZone.subSelect.option('Satara');
   stormZone.subSelect.option('Sindhdurg');
   stormZone.subSelect.option('Solapur');
   stormZone.subSelect.option('Thane');
   stormZone.subSelect.option('Wardha');
   stormZone.subSelect.option('Washim');
   stormZone.subSelect.option('Yavatmal');
}

else if(stormZone.select.value() === 'Manipur'){
   stormZone.subSelect.option('Ahmednagar');
   stormZone.subSelect.option('Akola');
   stormZone.subSelect.option('Amravati');
   stormZone.subSelect.option('Aurangabad');
   stormZone.subSelect.option('Beed');
   stormZone.subSelect.option('Bhandara');
   stormZone.subSelect.option('Buldhana');
   stormZone.subSelect.option('Chandrapur');
   stormZone.subSelect.option('Dhule');
   stormZone.subSelect.option('Gadchiroli');
   stormZone.subSelect.option('Gondia');
   stormZone.subSelect.option('Hingoli');
   stormZone.subSelect.option('Jalgaon');
   stormZone.subSelect.option('Jaina');
   stormZone.subSelect.option('Kolhapur');
   stormZone.subSelect.option('Latur');
   stormZone.subSelect.option('Mumbai City');
   stormZone.subSelect.option('Mumbai Suburban');
   stormZone.subSelect.option('Nanded');
   stormZone.subSelect.option('Nandurbar');
   stormZone.subSelect.option('Nagpur');
   stormZone.subSelect.option('Nashik');
   stormZone.subSelect.option('Osmanabad');
   stormZone.subSelect.option('Palghar');
   stormZone.subSelect.option('Parbhani');
   stormZone.subSelect.option('Pune');
   stormZone.subSelect.option('Ralgad');
   stormZone.subSelect.option('Ratnagiri');
   stormZone.subSelect.option('Sangli');
   stormZone.subSelect.option('Satara');
   stormZone.subSelect.option('Sindhdurg');
   stormZone.subSelect.option('Solapur');
   stormZone.subSelect.option('Thane');
   stormZone.subSelect.option('Wardha');
   stormZone.subSelect.option('Washim');
   stormZone.subSelect.option('Yavatmal');
}


 } 

function chooseState(){
   fill(255,0,0);
   textSize(25);
   textStyle(BOLD);
   text("Choose A State!.",displayWidth/2+50,displayHeight/2+250);
}
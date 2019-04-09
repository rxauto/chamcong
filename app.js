const api_key = 'AIzaSyDtw0UytH1dXaPa9wdUuSq0xJEfrZyBzB8';

navigator.geolocation
var init = () => {
	$('input#ctrl').trigger('click');
}

var main_app = () => {
	//var e = document.getElementById('showPos');
	//e.v-alue = "Đang lấy thông tin địa chỉ của bạn...";
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getMyLocation);
	} else {
		console.log('Trình duyệt của bạn không hỗ trợ GeoLocation')
	}
}

var getMyLocation = (pos) => {
	var latitude = pos.coords.latitude;
	var longitude = pos.coords.longitude;
	var gc_link =`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${api_key}`
	fetch(gc_link)
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			parseMyLocation(json.results)
		});
}

var parseMyLocation = (json) => {
	var e = document.getElementById('showPos');
	var s = '';
	json.forEach((c, _) => {
		//s += c.formatted_address + '\r\n';
		_==0?s = c.formatted_address:null;
	})
	
	var rx = new Date();
	var timeStr = 'Thời gian: ' + rx.toLocaleDateString() + ' ' + rx.toLocaleTimeString();
	document.getElementById("timeNow").innerHTML = timeStr;
	document.getElementById("placeNow").innerHTML = "Địa điểm: " + s;
}


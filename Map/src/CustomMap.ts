export class CustomMap {
  private googlemaps: google.maps.Map;
  constructor(divId: string) {
    this.googlemaps = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }
}

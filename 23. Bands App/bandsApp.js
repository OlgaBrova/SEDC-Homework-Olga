function BandApp() {
    this.dataProcessingService = new DataProcessingService();

    this.tableBody = document.getElementById("bandsTable");
    this.bandByName = document.getElementById("bandName");
    this.bandByAlbums = document.getElementById("bandAlbums");

    this.init = function() {

        window.addEventListener("load", () => {

            this.dataProcessingService.getAllBands(this.tableBody);
            console.log('page is fully loaded');
        });

        this.bandByName.addEventListener("click", () => {
            this.dataProcessingService.getBandsByName(this.tableBody);
           
        });

        this.bandByAlbums.addEventListener("click", () => {
            this.dataProcessingService.getBandsByAlbum(this.tableBody);
           
        });

    };
    
}



function DataProcessingService() {
    this.apiService = new ApiService();

    
    this.getAllBands = function (element) {
        this.apiService.getBands()
            .then(response => response.json())
            .then(data => this.mapBands(data))
            .then( bands => {

                this.showBands(bands, element)
            })
            .catch(error => {
                
                console.log(error);
            });

    };


    this.mapBands = function (bands) {
        return new Promise((resolve, reject) => {
            if (!bands || bands.length === 0) {
                reject("Something went wrong!");
            }

            let mapedBands = bands.map(band => {
                return {
                    name: band.name,
                    active: band.active,
                    tags: band.tags,
                    members: band.members,
                    albums: band.albums
                }
            });
            resolve(mapedBands);
        });
    };


    this.showBands = function(bands, element) {

        let row = '' ;
        element.innerHTML = "";
       
        for (let i = 0; i < bands.length; i++) {
            row += `<tr>
                        <th scope="row">${i+1}</th>
                        <td>${bands[i].name}</td>
                        <td><button disabled class="btn ${bands[i].active ? "btn-warning" : "btn-danger"}"> ${bands[i].active ? "Active" : "Not Active"}</button></td>
                        <td>${bands[i].tags.map(tag => ` ${tag}`)}</td>
                        <td>${bands[i].members.map(member => {
                            if(member.former === true) {
                                return
                            } else {
                                return `${member.name}<br>`;
                            }
                        }).join("")}</td>
                        <td>${bands[i].albums.length}</td>
                    </tr>`
        }
       
        element.innerHTML = row;
        
    };


    this.getBandsByName = function (element) {
        this.apiService.getBands()
            .then(response => response.json())
            .then(data => this.sortBandsByName(data))
            .then( bands => {

                this.showBands(bands, element)
            })
            .catch(error => {
            
                console.log(error);
            });

    };

    this.sortBandsByName = function (bands) {
        return new Promise((resolve, reject) => {
            if (!bands || bands.length === 0) {
                reject("Something went wrong!");
            }

            let sortByName = bands.sort((band1, band2) =>
            band1.name.localeCompare(band2.name));

            resolve(sortByName);
        });
    };
  

    this.getBandsByAlbum = function (element) {
        this.apiService.getBands()
            .then(response => response.json())
            .then(data => this.sortBandsByAlbums(data))
            .then( bands => {

                this.showBands(bands, element)
            })
            .catch(error => {
               
                console.log(error);
            });

    };

    this.sortBandsByAlbums = function (bands) {
        return new Promise((resolve, reject) => {
            if (!bands || bands.length === 0) {
                reject("Something went wrong!");
            }

            let sortByAlbums = bands.sort((band1, band2) =>
            band1.albums.length - band2.albums.length);

            resolve(sortByAlbums);
        });
    };

    
}



function ApiService() {

    this.url = "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json";
    
    this.getBands = function () {
        
        console.log("getBands", this.url);
        return fetch(this.url);
    };

}


let api = new ApiService();
api.getBands();


let bandApp = new BandApp();
bandApp.init();

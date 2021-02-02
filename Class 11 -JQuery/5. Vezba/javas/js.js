$(document).ready(function(){
    
    //5.Use this link https://api.openaq.org/v1/cities to make ajax call with jQuery. The returned data need to be shown in unordered list.Slikite da se prikazat na thumbnails + url da ima.

    
    $("#button").click(function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/photos",
            success: function(result) {
                let outputPhotos = [];
                for (let i = 0; i < 100; i++){
                    outputPhotos.push(result[i]);
                }
                if (outputPhotos !== undefined && outputPhotos.length > 0) {
                    $("#resultPhotos").append (
                        `
                            <ul>
                                ${outputPhotos.map((photo) => {
                                    // console.log();
    
                                    return (
                                        `
                                            <li>
                                                id: ${photo.id}<br>
                                                title: ${photo.title}<br>
                                                url: ${photo.url}<br>
                                                thumbnailUrl: ${photo.thumbnailUrl}<br><br>
                                                
                                                <img src = "${photo.thumbnailUrl}"><br>   
                                            </li><br>
                                        `
                                    )
                                }).join("")}
                            </ul>
                        `
                    )
                }
            },
            error: function (error) {
            console.error(error);
            }
        })
    })



});



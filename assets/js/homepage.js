$('#anim').hide();

document.getElementById("file-upload").addEventListener("change", validateFile) ;
function validateFile(){
    const {name:name} = this.files[0];
    let fileExt= name.split(".")[1] ;
    if ( "csv" != fileExt )
    {
        alert("file type not allowed");
        this.value = null;
        return false;
    }
    return true
}
function upload(){
    if(validateFile){
        $('#anim').show();
    }
};
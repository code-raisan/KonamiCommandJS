class KonamiCommandJS{
    KONAMI_COMMAND_KEY_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    c = 0;

    constructor(func, pram=null){
        window.onkeydown = (event) =>{
            if(event.keyCode == this.KONAMI_COMMAND_KEY_CODE[this.c]){
                if(this.c == 9){
                    this.c = 0;
                    func(pram);
                }else{
                    this.c++;
                };
            }else{
                this.c = 0;
            }
        }
        return;
    }
}
let {Server: SoketIO} = require('socket.io');

class Socket {
    static instancia;

    constructor(server){
        if(Socket.instancia){
            return Socket.instancia;
        }
        Socket.instancia = this;
        this.io = new SoketIO(server);
        this.usuarios = [];
        this.mensajes = [];
    }
    init(){
        try {

                this.io.on('connection',(socket)=>{
                    console.log('Nueva conexion');
                    socket.emit("init",this.mensajes);

              
                 socket.on("mensaje",(data)=>{
                     let res= {
                         id: socket.id,
                         mensaje: data
                     }
                     this.mensaje.push(res);
                     this.io.sockets.emit("listenserver",this.mensajes);
                });
                socket.on("addUser",(data)=>{
                    let newUser= {
                        id : socket.id,
                        ...data,
                        active: true
                    }
                    this.mensaje.push(newUser);
                    this.io.sockets.emit("listenserver",this.usuarios);
               }); 
               socket.on("disconnect",(data)=>{
                   console.log("desconectado");
                    // this.conexiones.push(client);
               // client.on('disconnect',()=>{
              //  this.conexiones = this.conexiones.filter(con => con.id != client.id);
               //  });
               });

                //console.log(socket.id);
            });

        }
        catch (error) {
            console.log(error);
        }
       
          

    }
}
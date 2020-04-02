//................0.1. Info.....................
// segala file back-end diakhiri dengan js.
// sumber: MODULE 4 BACK-END: HTTP MODULES, MODULE 6: Express, dan MODULE 7: rest API
// Install nodemon --> npm i -g nodemon ( kalau kita save tak perlu tulis node . berulang-ulang )

//................0.2. Intro.....................
/*
Saat menjelajahi situs web, terkadang klien melakukan sesuatu (cth. mengklik tombol)
itu akan meminta data dari server & klien akan melihat responsnya, seperti membuka halaman web baru. */
//           ___________                 ___________  
//          |           | request       |           |
//          |           |---------->    |           |
//          |   Client  |               |   Server  |
//          |           |   <---------- |           |
//          |___________|    response   |___________|

// Klien & server saling berkomunikasi, menggunakan protokol
// Note: saat buat server kita(web dev) bisa atur kalau dari front-end klik apa responsnya apa 

//................1.0. HTTP.....................
/*HTTP (The Hypertext Transfer Protocol) dirancang untuk memungkinkan komunikasi
antara klien & server. Ini berfungsi sebagai protokol permintaan & respons
antara klien & server.*/


//buat https (bawaan node.js jd tak perlu npm install)

// const http=require('http')      //module untuk buat server (jangan di comment. Kalau masuk express, baru comment)

// .............1.1.HTTP String.............
// var server=http.createServer((request, respond)=>{              // writehead ibarat kop surat / header (menunjukkan bahwa contentnya itu tipenya text)
//     respond.writeHead (200, {'Content-Type' :'text/plain'})     // 200 itu status code-nya. Artinya ok
//     respond.end('Halo Semua hahahaha')                          // respond.end itu isinya string                                                                 
// })
// server.listen(8080)                                             // Ini untuk port (terserah nomor portnya)-> di title bar(?) tulis localhost:8080
// console.log('server berjalan di 8080')                          // coba di terminal (nodemon .)
// (?)Gimana kalau content-type nya image? (http ini dasar, nanti belajar yg namanya express)

//.............1.2.HTTP-HTML..............

// var server=http.createServer((req, res)=>{                      // request-> req, respond->res
//     res.writeHead (200, {'Content-Type' :'text/html'})          // tipenya sekarang html. Kalau berhasil, Status 404, diconsole.log, tak berhasil (^^)
//     res.end('<h1>Berhasil!</h1>')                               // html tetap dalam string
//                                                                 // Gimana kalau content-type nya image? (http ini dasar, nanti belajar yg namanya express)
// })
// server.listen(8080)                                             // Ini untuk port (terserah nomor portnya)
// console.log('server berjalan di 8080')                          // coba di terminal (nodemon .)

//.............1.3.HTML-FS..............

// const fs=require('fs')                                          // sekarang pakai fs(file system), buat file unyu.html
// const unyu =fs.readFileSync('unyu.html','utf8')                 // fs harus sdh utf8, baca file(see pelajaran sblmnya) 
// var server=http.createServer((request, respond)=>{
//     console.log('Request:' + request.url)
//     respond.writeHead (200, {'Content-Type' :'text/html'})      // tipenya masih html...
//     respond.end(unyu)                                           // unyu dari const unyu. Isinya content-typenya: html, jadi res.end-nya bisa langsung unyu
// })
// server.listen(8080)                                             // Ini untuk port (terserah nomor portnya)
// console.log('server berjalan di 8080')                          // coba di terminal (nodemon .)

//.............1.4. Json + ROUTING..............
/* Json--> buat perpindahan data (antara front-end & back-end, data yang dikirimkan berupa json)
waktu masuk di back-end jadi Js lagi*/

// const fs=require('fs')                                           // masih pakai fs(file system)
// const unyu =fs.readFileSync('unyu.html','utf8')
// var server=http.createServer((req, respond)=>{
//     // console.log('require:' + req.url)
//     respond.writeHead (200, {'Content-Type' :'application/json'})// tipenya sekarang json
//     var obj= {
//         // nama:'dino',
//         nama:req.url==='/'? 'dino': 'doni',                      // ini routingnya. Pakai if / eternary
//         sex: 'male',
//         password:'123',
//         email:'suryagraha2207@gmail.com'
//     }                                                            // tak bs langsung res.end(obj) krn content-typenya adlh json
//     respond.end(JSON.stringify(obj))                             // untuk ubah jadi json                            
// })
// server.listen(8080)                                              // Ini untuk port (terserah nomor portnya)
// console.log('server berjalan di 8080')                           // coba di terminal (nodemon .)
// (?)Ribet ya... Nanti pakai ekspress lebih mudah)

//.............2.1 Express + routing..............
// npm init dulu (untuk package j.son) di terminal -->enter enter enter sampai muncul
// Install express dulu (npm i express)
// Buat .gitignore dalam folder day-3nya dan masukan /node_modules

// const express = require('express')                               // Urutan berpengaruh!
// const app=express()
// const fs = require ('fs')
// const PORT= 8080

// app.get('/',(req,res)=>{                                         // Method. kayak axios. Bisa patch, bisa put               
    // res.status(200).send('Aloha')                                // tak usah tulis content-typenya lagi                  
    // res.status(200).send('<h1>Selamat datang</h1>')              // langsung tahu kalau ini adalah html                  
    // res.status(200).send({nama:'dino'})                          // langsung tahu kalau ini adalah json. Status bisa diubah
// })
// app.get('/admin',(req,res)=>{                                    // Ini cara untuk me-routing. (Bisa dibuat banyak app.get-nya)                                   
//     res.send('<h1>Selamat datang Admin </h1>')                   // sesama app.get routenya tak boleh sama!
// })
// app.get('/unyu',(req,res)=>{                                     // Isi fs itu kumpulan html jadi harus require('fs')
//     fs.readFile('unyu.html',(err,data)=>{                        // fs nya bersifat async jd punya callback
//         res.send(data.toString())                                // toString() ubah buffer jadi string (ingat lesson day-2)
//     })
// })
// app.listen(PORT,()=>console.log('server jalan di'+ PORT))        // sama kayak server.listen. Buka terminal--> nodemon .
                                                                    // app.listen harus yang paling terakhir urutannya

//.............2.2. Params..............
// const express   = require('express')                             // Urutan berpengaruh!
// const app       = express();
// const PORT      = 8080

// app.get('/admin',(req,res)=>{                                    // Kalau kita akses halaman ini, kita bakal execute coding di dlm-nya
//     res.send('<h1>Selamat datang Admin </h1>')
// })
// app.get('/admin/:bebas',(req,res)=>{                             // req.params memang cara penulisannya                                
//     console.group(req.params.bebas)                              // kalau params untuk 1 data
//     res.send(`<h1>Selamat datang Admin ${req.params.bebas}</h1>`)// res.send dikirim ke front-end (biasa posisi paling terakhir)
// })
// app.get('/users',(req,res)=>{                                    // query untuk data lebih dari 1(biasa id& password, searching, pagination)
//     console.group(req.query)                                     // gunanya untuk kirim data dr user tulis front-end, ke back-end, terus ke database (sql)
//     res.send(`<h1>data username: ${req.query.username}</h1>`)    // tulis di url http://localhost:5000/users?username=dino
// })                                                               // di terminal keluar yang ditulis di url
// app.listen(PORT,()=>console.log('Port jalan di '+PORT))

//.............2.3. Post..............
// Install postman (bisa laptop atau chrome)                      // Front-end nya bisa diganti dulu dg postman u/ testing
    // Fungsi untuk testing back-end
// Install body-parser (npm i body-parser)

const bodyparser    = require('body-parser')                      // untuk nge-post data di postman
const express       = require('express')
const app           = express()
const PORT          = 8080
app.use(bodyparser.json())                                       // buat kirim data user (yang dari front-end) ke server
app.use(bodyparser.urlencoded({extended:false}))                 // idem dg atas                   

var users=[                                                      // krn blm buat database, dibuat dulu di sini
    {   
        id:1,                                                    // id ditambah belakangan setelah instruksi ++(lihat ke bawah) selesai
        username: "dino",
        password: "qwe"
    },
    {
        id:2,
        username:'Fardan',
        password: "qwe"
    },
    {
        id:3,
        username:'Indones',
        password: "qwe"
    },
]
app.get('/users',(req,res)=>{                                    // tak pakai query lagi untuk data lebih dari 1(biasa id& password, searching, pagination)
    res.send(users)                                              // kalau di localhost, keluar, data users 1-3 di atas
})       
app.post('/users',(req,res)=>{                                   // mau nge-post(tambah) data. Nama '/users' tak papa sama krn method beda (1 di .post, 1 di .get)                            
/*++*/ console.log('isi req.body',req.body)                                  // req.body ada krn body-parser. Kalau mau kirim data banyak pakai req.body
// /*++*/users.push(req.body)                                    // ini awalnya. tapi stlh tambah id & di-refresh, users kembali jd 3. stlh send, id otomatis tambah
    users.push({...req.body, id: users.length+1})                // balik lagi ke post.man, masukin username & passwordnya lagi   
    /*++*/ res.send(users)
// /*++* res.send('berhasil')                                             
})
app.put('/users/:id',(req,res)=>{                                  // mau edit, perlu id (baca: user dg id berapa yg mau diedit)
    users[req.params.id-1]={...users[req.params.id-1],...req.body} // ingat dino= array ke-0, krn incar id=1(contohnya) untuk disamaain, kurang 1                                       
/*--*/res.send(users)                                              // di postman, ubah POST jadi PUT
})
app.get('/deleteusers/:id',(req,res)=>{     
    users.splice(req.params.id-1,1)
/*hh*/res.send(users)
})
// post dan put punya req.body (kalau get & delete tak ada)
// req.body itu isi dari ...                                                                 
/* ++ 
    ^ buka postman-> post (tulis url http://localhost:8080/users)
    ^ di bawah-nya ada:   params      auth       headers      ->(body) ... ... test 
    ^ di bwh-nya lg ada: none     form-data   -->(raw)        binary
    ^ stlh pilih raw akan muncul dropdown: text --> ubah jadi Json
    ^ masukkin obj isi{ username: "fuad", password: "qwe",--> send}
    ^ seharusnya keluar "berhasil"(dari res.send awal) di body bagian bawah.
    ^ ubah res.send('berhasil')--> res.send(users)
    ^ masukkin lagi obj isi { username: "fuad", password: "qwe",--> send}
    ^ seharusnya data user bertambah
    ^ balik ke localhost:8080/users, kalau di refresh jg akan bertambah usernya
*/
/* -- 
    ^ di postman, ubah POST jadi PUT
    ^ di sampingnya-nya ada url : http://localhost:8080/users   
    ^ tambah id yang mau di edit: http://localhost:8080/users/2
    ^ ubah username & password jd yang diingkan (fardan jadi fardin)-->send
    ^ seharusnya username & passwordnya berubah.
*/
/* hh 
    ^ di postman, ubah PUT jadi GET
    ^ di sampingnya-nya ada url : http://localhost:8080/users   
    ^ ubah jadi                 : http://localhost:8080/deleteusers
    ^ tambah id yg mau di hapus : http://localhost:8080/deleteusers/2
    ^ langsung klik send
    ^ seharusnya username & password id 2 kehapus.
*/
app.listen(PORT,()=>console.log('Port jalan di '+PORT))
                                      
// Untuk T.A pakai yang namanya M.E.R.N
// Mysql/ mongodb
// Express
// React
// Nodejs

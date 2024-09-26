// Soal - 03
// Buatlah file 02-asynchronous.js dan copy template soal di bawah. Lalu berikan jawaban tersebut pada 03-asynchronous.js.

// Kamu diminta untuk membuat sebuah fungsi getGitHubUser yang akan mengambil profile dari seorang user pada platform GitHub, fungsi tersebut memiliki deskripsi sebagai berikut:

// + nama => getGitHubUser
// + description => mengambil profile seorang user yang telah terdaftar pada platform GitHub
// + parameter
//      - username [String] => username yang sudah terdaftar pada GitHub
// + return value
//      - mengembalikan null apabila parameter bernilai kosong
//      - mengambalikan Object apabila user telah ditemukan
//      - mengembalikan "not found" apabila tidak menemukan user dengan username yang telah dimasukan oleh user
// + clue
//      - gunakan fungsi fetch untuk mendapatkan data dari GitHub API
//      - gunakan konsep asynchronous untuk menggambil data menggunakan fetch
//      - gunakan try catch untuk error handling
//      - berikut merupakan endpoint yang dapat kalian gunakan untuk mendapatkan data dari GitHub API

import fetch from 'node-fetch';

const getGitHubUser = async( str ) => { 
    try {
        if (!str) {
            return null;
        }
        const check = await fetch("https://api.github.com/users/"+str);
        let tmp = await check.json();
        if (tmp.id) {
            return tmp;
        }
        return "Not Found";
    } catch (error) {
        throw (error);
    }
}

const printGitHubUser = async () => {
    const mojombo = await getGitHubUser("mojombo");
    const orange = await getGitHubUser("");
    const rudiTabuti = await getGitHubUser("rudi.tabuti");

    console.log(mojombo);
    console.log(orange);
    console.log(rudiTabuti);
}

printGitHubUser();
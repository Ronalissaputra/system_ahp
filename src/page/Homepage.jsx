import React from "react";
import Layout from "../layout/Layout";

const Homepage = () => {
  return (
    <Layout>
      <div className="flex justify-center lg:space-x-2 items-center font-bold">
        <img
          src="https://i.pinimg.com/originals/58/32/bb/5832bb17388f735076fb0ee6a0bffbac.png"
          alt="logo unimerz"
          className="w-[500px]"
        />
        <p className="lg:text-3xl text-xl">
          System Deteksi Kerusakan Mobil Toyota Avanza Menggunakan Metode Fuzzy
          Analytic Hierarchy Process Berbasis Website
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-2">
        <div className="border-2 border-slate-400 h-auto rounded-md p-2">
          <p className="text-2xl font-bold">1. System Pendukung Keputusan</p>
          <p className="indent-8 whitespace-normal text-lg">
            Sistem Pendukung Keputusan (SPK) adalah suatu konsep atau pendekatan
            dalam bidang ilmu komputer dan manajemen yang bertujuan untuk
            membantu individu atau kelompok dalam mengambil keputusan yang lebih
            baik dan lebih terinformasi. SPK memanfaatkan teknologi informasi
            dan data untuk menganalisis berbagai alternatif, kriteria, serta
            faktor yang relevan dalam suatu keputusan. Dengan demikian, SPK
            membantu mengatasi kompleksitas dan ketidakpastian dalam proses
            pengambilan keputusan, terutama dalam situasi di mana terdapat
            banyak variabel yang harus dipertimbangkan.
          </p>
        </div>
        <div className="border-2 border-slate-400 h-auto rounded-md p-2">
          <p className="text-2xl font-bold">2. Logika Fuzzy</p>
          <p className="indent-8 whitespace-normal text-lg">
            Fuzzy, dalam konteks matematika dan komputasi, merujuk pada konsep
            yang dapat mengatasi ketidakpastian atau ketidakjelasan dalam
            pemahaman dan pengukuran. Istilah ini pertama kali diperkenalkan
            oleh Lotfi A. Zadeh pada tahun 1965 dalam teori himpunan fuzzy, yang
            merupakan salah satu aspek penting dalam teori sistem fuzzy. Ide
            dasar di balik konsep fuzzy adalah mengakui bahwa beberapa konsep
            dalam dunia nyata tidak dapat dijelaskan dengan tegas sebagai
            "benar" atau "salah," "hitam" atau "putih," tetapi dapat berada di
            antara kedua ekstrem tersebut.
          </p>
        </div>
        <div className="border-2 border-slate-400 h-auto rounded-md p-2">
          <p className="text-2xl font-bold">3. Analytic Hierarchy Process</p>
          <p className="indent-8 whitespace-normal text-lg">
            Fuzzy, dalam konteks matematika dan komputasi, merujuk pada konsep
            yang dapat mengatasi ketidakpastian atau ketidakjelasan dalam
            pemahaman dan pengukuran. Istilah ini pertama kali diperkenalkan
            oleh Lotfi A. Zadeh pada tahun 1965 dalam teori himpunan fuzzy, yang
            merupakan salah satu aspek penting dalam teori sistem fuzzy. Ide
            dasar di balik konsep fuzzy adalah mengakui bahwa beberapa konsep
            dalam dunia nyata tidak dapat dijelaskan dengan tegas sebagai
            "benar" atau "salah," "hitam" atau "putih," tetapi dapat berada di
            antara kedua ekstrem tersebut.
          </p>
        </div>
        <div className="border-2 border-slate-400 h-auto rounded-md p-2">
          <p className="text-2xl font-bold">
            4. Struktur Hierarchy Analytic Hierarchy Process
          </p>
          <img
            className="w-full h-auto"
            src="data:image/png;base64,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"
            alt="struktur AHP"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;

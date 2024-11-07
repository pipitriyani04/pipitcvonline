// Define an interface for the props of RowRiwayat component
interface RowRiwayatProps {
  sebagai: string;
  instansi: string;
  tahun: string;
}

function RowRiwayat({ sebagai, instansi, tahun }: RowRiwayatProps) {
  return (
    <div className="border-2 border-blue-400/75 rounded-lg bg-gray-700 p-2 my-2">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">{sebagai}</div>
          <div className="col-span-12 md:col-span-4">{instansi}</div>
          <div className="col-span-12 md:col-span-4">{tahun}</div>
        </div>
      </div>
    </div>
  );
}

export default function RiwayatPekerjaan() {
  return (
    <section>
      <div className="container mx-auto p-2 text-center pt-20 text-white">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-600 shadow-md mb-8 tracking-wider hover:scale-110 transition-all duration-500">
          Riwayat Pekerjaan
        </h1>
        <RowRiwayat sebagai="Manager Keuangan" instansi="Bank Rakyat Indonesia" tahun="2025" />
        <RowRiwayat sebagai="Akuntan" instansi="PT Rans" tahun="2027" />
        <RowRiwayat sebagai="Perpajakan" instansi="Kantor Pajak Majalengka" tahun="2029" />
        <RowRiwayat sebagai="Programmer" instansi="CVGMedia" tahun="2030" />
      </div>
    </section>
  );
}

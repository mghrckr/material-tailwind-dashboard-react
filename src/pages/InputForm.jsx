import { useState } from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "@/store/actionCreators";
const BASE_URL = `http://192.168.127.112:2887`
export function InputForm() {
  const [formData, setFormData] = useState({
    tanggal_masuk: '',
    nama_lengkap: '',
    jabatan: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    nomor_telpon: '',
    nik: '',
    npwp: '',
    email: '',
    nama_emergency: '',
    hubungan_emergency: '',
    nomor_kontak_emergency: '',
    nomor_rekening_bca: '',
    alamat_lengkap_ktp: '',
    alamat_lengkap_domisili: '',
    foto_ktp: null,
    foto_formal: null,
    file_kontrak: null,
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0], // Mengambil file pertama yang diunggah
      });
    }
  };


  const handleSubmitFile = async (fileKey, e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append(fileKey, formData[fileKey]);

    try {
      const response = await fetch(`${BASE_URL}/uploadfoto`, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const responseData = await response.json();
        // console.log(responseData,'kontol');
        // Perbarui nilai state dengan URL atau data lain yang diperoleh dari respons
        setFormData({
          ...formData,
          [fileKey]: responseData, // Gantilah 'url' dengan kunci yang sesuai dengan respons API Anda
        });

        console.log('File uploaded successfully');
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  // console.log(formData, 'kocaaak');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      // Dispatch the action to add user
      await dispatch(addUser(Object.fromEntries(formDataToSend)));
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Add Data
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-1 flex flex-col gap-6">
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Tanggal Masuk
            </Typography>
            <Input
              type="date"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="tanggal_masuk"
              value={formData.tanggal_masuk}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Nama Lengkap
            </Typography>
            <Input
              type="text"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="nama_lengkap"
              value={formData.nama_lengkap}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Jabatan
            </Typography>
            <Input
              type="text"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="jabatan"
              value={formData.jabatan}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Tempat Lahir
            </Typography>
            <Input
              type="text"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="tempat_lahir"
              value={formData.tempat_lahir}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Tanggal Lahir
            </Typography>
            <Input
              type="date"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="tanggal_lahir"
              value={formData.tanggal_lahir}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Nomor Telepon
            </Typography>
            <Input
              type="number"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="nomor_telpon"
              value={formData.nomor_telpon}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              NIK
            </Typography>
            <Input
              type="number"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="nik"
              value={formData.nik}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              NPWP
            </Typography>
            <Input
              type="text"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="npwp"
              value={formData.npwp}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              type="email"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Nama Emergency
            </Typography>
            <Input
              type="text"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="nama_emergency"
              value={formData.nama_emergency}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Hubungan Emergency
            </Typography>
            <Input
              type="text"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="hubungan_emergency"
              value={formData.hubungan_emergency}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Nomor Kontak Emergency
            </Typography>
            <Input
              type="number"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="nomor_kontak_emergency"
              value={formData.nomor_kontak_emergency}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Nomor Rekening BCA
            </Typography>
            <Input
              type="number"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="nomor_rekening_bca"
              value={formData.nomor_rekening_bca}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Alamat Lengkap KTP
            </Typography>
            <Textarea
              type="text"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="alamat_lengkap_ktp"
              value={formData.alamat_lengkap_ktp}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Alamat Lengkap Domisili
            </Typography>
            <Textarea
              type="text"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="alamat_lengkap_domisili"
              value={formData.alamat_lengkap_domisili}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Foto KTP
            </Typography>
            <Input
              type="file"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="foto_ktp"
              accept="image/*"
              onChange={handleFileChange}
            />
            <Button
              type="button"
              className="mt-3"
              onClick={(e) => handleSubmitFile('foto_ktp', e)}
            >
              Submit KTP
            </Button>
          </div>
          {/* Field untuk foto formal */}
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Foto Formal
            </Typography>
            <Input
              type="file"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              accept="image/*"
              name="foto_formal"
              onChange={handleFileChange}
            />
            <Button
              type="button"
              className="mt-3"
              onClick={(e) => handleSubmitFile('foto_formal', e)}
            >
              Submit Formal
            </Button>
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Foto Kontrak
            </Typography>
            <Input
              type="file"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              accept="image/*"
              name="file_kontrak"
              onChange={handleFileChange}
            />
            <Button
              type="button"
              className="mt-3"
              onClick={(e) => handleSubmitFile('file_kontrak', e)}
            >
              Submit Foto Kontrak
            </Button>
          </div>
        </div>
        <Button
          type="submit"
          className="mt-6" fullWidth>
          Submit
        </Button>
      </form>
    </Card>
  );
}

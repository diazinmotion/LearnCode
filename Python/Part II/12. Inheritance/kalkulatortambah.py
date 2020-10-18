from kalkulator import Kalkulator

class KalkulatorTambah(Kalkulator):
    
    def tambah_angka(self, num1, num2):
        # bila ingin menggunakan method yang sudah ada dari superclass
        # bisa menggunakan sintaks super()
        if num1 + num2 <= 9:
            super().tambah_angka(num1, num2)
        else:
            self.nilai = num1 + num2
        
        return self.nilai
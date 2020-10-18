class Kalkulator:

    def __init__(self, nilai = 0):
        self.nilai = nilai

    def tambah_angka(self, num1, num2):
        self.nilai = num1 + num2
        if self.nilai > 9:
            print('Melebihi batas angka {}'.format(self.nilai))
        
        return self.nilai
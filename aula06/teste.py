class Escola():
    def __init__(self, nome, rua, nota):
        self._nome = nome
        self._rua = rua
        self._nota = nota

    @property
    def nome(self):
        return self._nome
    
    @nome.setter
    def nome(self, novonome):
        self._nome = novonome
    
    @property
    def rua(self):
        return self._rua
    
    @rua.setter
    def rua(self, novarua):
        self._rua = novarua

class Professor():
    def __init__(self, nome_pro, materia, escola=None):
        self._nome_pro = nome_pro
        self._materia = materia
        self._escola = escola




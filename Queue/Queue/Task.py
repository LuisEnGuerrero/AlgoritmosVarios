import random

class Task:
    def __init__(self, time):
        self.timestamp = time  # el segundo en que la tarea se creó
        self.pages = random.randrange(1, 21)  # generamos la cantidad de páginas que se tendrán que imprimir (entre 1 y 20)

    # devuelve el segundo en que fue creada la tarea (no usamos este método en la simulación)
    def get_stamp(self):
        return self.timestamp

    # devuelve la cantidad de páginas (no usamos este método en la simulación)
    def get_pages(self):
        return self.pages

    # el tiempo de espera de la tarea para ser impresa
    # lo obtenemos con la diferencia entre la hora en que fue creada y la hora en que se mandó a impresión (la cual le pasamos en la simulación)
    def wait_time(self, current_time):
        return current_time - self.timestamp
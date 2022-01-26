class Printer:
    def __init__(self, ppm):
        self.page_rate = ppm  # Cantidad de páginas que puede imprimir por minuto
        self.current_task = None  # Tarea que se está imprimiendo
        self.time_remaining = 0  # tiempo restante para terminar de imprimir una tarea

    def tick(self):
        # si está imprimiendo una tarea reducimos un segundo al tiempo que tiene que esperar la tarea para terminar de imprimirse
        if self.current_task is not None:
            self.time_remaining = self.time_remaining - 1
            # si hemos terminado de imprimir la tarea liberamos la impresora
            if self.time_remaining <= 0:
                self.current_task = None

    # nos dice si la impresora está ocupada
    def busy(self):
        if self.current_task is not None:
            return True
        else:
            return False

    def start_next(self, new_task):
        # le pasamos la siguiente tarea
        self.current_task = new_task
        # calculamos el tiempo que tardara en imprimir la nueva tarea
        self.time_remaining = new_task.get_pages() * 60/self.page_rate

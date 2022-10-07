
import tkinter
import tkinter.messagebox as tkMessageBox
window = tkinter.Tk()
window.geometry("540x380")

def helloCallBack():
    tkMessageBox.showinfo("Hello Python", "Hello World")
B = tkinter.Button(window, text="Hello", command=helloCallBack)
B.pack()
window.mainloop()

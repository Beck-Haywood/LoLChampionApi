array = ['1','2','3','4']
def arrayrotate(array, n):
    for i in range(n):
        # print(i)
        firstItem = array[0]
        print(firstItem)
        array.remove(firstItem)
        array.append(firstItem)
    return(array)

print(arrayrotate(array, 5001))
#Ask for clarifying questions 
#Talk through what im thinking 
def fasterarrayrotate(array, n):
    if n == array.length():
        return(array)
    
    

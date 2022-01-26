BubbleSortA (Arr, N) // Arr es una matriz de tamaño N.
{
    for (I = 1 in (N-1)) // N elementos => (N-1) pase
    {
    // Intercambia elementos adyacentes de Arr [1: (NI)] de modo que
    // más grande entre {Arr [1], Arr [2], ..., Arr [NI]} llega a Arr [NI]
        for (J = 1 in (N*I)) // Ejecuta el pase
        {
            if (Arr [J]> Arr [J + 1]) 
                swap (Arr [j], Arr [J + 1]);
        }
    }
}

BubbleSortB (Arr, N) // Arr es una matriz de tamaño N. 
{ 
    for (I = 1 in (N-1)) // N elementos => (N-1) pass 
    { 
    // Intercambia elementos adyacentes de Arr [1: (NI)] tal que 
    // más grande entre {Arr [1], Arr [2], ..., Arr [NI]} llega a Arr [NI] 
        noSwap = true; // Verifica la ocurrencia del intercambio en el bucle interno 
        for (J = 1 in (NI)) // Ejecuta la pasada 
        { 
            if (Arr [J]> Arr [J + 1]) 
            { 
                Swap (Arr [j], Arr [ J + 1]); 
                noSwap = false; 
            } 
        } 
        if (noSwap) // sale del 
            break; 
    } 
}


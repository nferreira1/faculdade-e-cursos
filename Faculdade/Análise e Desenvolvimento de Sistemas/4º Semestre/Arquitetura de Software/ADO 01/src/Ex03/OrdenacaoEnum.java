package Ex03;

public enum OrdenacaoEnum implements OrdenacaoStrategy {

    INSERTION() {
        @Override
        public void ordenacao(int[] v) {
            int i, j;
            int temp;
            for (i = 1; i < v.length; i++) {
                temp = v[i];
                j = i;
                while (j > 0 && v[j - 1] >= temp) {
                    v[j] = v[j - 1];
                    j--;
                }
                v[j] = temp;
            }
        }

    },
    SELECTION {
        @Override
        public void ordenacao(int[] v) {
            int i, j, min, aux;
            for (i = 0; i < v.length - 1; i++) {
                min = i;
                for (j = i + 1; j < v.length; j++)
                    if (v[j] < v[min])
                        min = j;
                aux = v[i];
                v[i] = v[min];
                v[min] = aux;

            }
        }
    },
    BUBBLE {
        @Override
        public void ordenacao(int[] v) {
            int i, j;
            int temp;
            for (j = 0; j < v.length - 1; j++)
                for (i = 0; i < v.length - 1 - j; i++)
                    if (v[i] > v[i + 1]) {
                        temp = v[i];
                        v[i] = v[i + 1];
                        v[i + 1] = temp;

                    }
        }
    };

    public static OrdenacaoEnum fromInt(int tipo) {
        // O ajuste é direto, tipo 1 = INSERTION, tipo 2 = SELECTION, tipo 3 = BUBBLE
        return OrdenacaoEnum.values()[tipo - 1];
    }
}

import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Curso TI</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>21/21/21</td>
          </tr>
          <tr>
            <td>Energia</td>
            <td className="withdraw">-R$12.000</td>
            <td>Casa</td>
            <td>21/21/21</td>
          </tr>
          <tr>
            <td>Curso TI</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>21/21/21</td>
          </tr>
        </tbody>
      </table>
    </Container>

  )
}
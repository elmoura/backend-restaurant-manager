/* eslint-disable no-useless-escape */
import 'reflect-metadata';
import { CryptoService } from '../crypto.service';

describe('CryptoService tests', () => {
  const cryptoService = new CryptoService();

  test('deve conseguir criptografar e descriptografar um dado mantendo seu valor original', async () => {
    const text = `
    🤡ÅŤÅQŮĘ ĐØ§ PÅĽHÅÇØ§ ĽØĶØ🤡

    AGORA É NOIS QUE MANDA NESSA PORRA ☣☣☣👿
    
    🤡SAIAM DO GRUPO 🤡 COMEÇOU O ATAQUE 🤡🤡🤡 HÁ! HÁ! HÁ! HÁ! HÁ! 🤡🤡🤡🤡🤡🤡
    
    VØÇË§ FØŘÅM ÅŤÅČÅĐØ§ PËĽØ§ PÅĽHÅÇØ§ ĽØĶØ§ Ø§ ČØMËĐØŘË§ ĐË ÄĐMÎÑÎ§ŤŘÅĐØ 🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡 🤡🤡🤡🤡🤡🤡
    
    ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= 🤡 =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
            ( . )
         __// 🍆 \\__
    
    🤡PÅĽHÅÇØ§ ĽØĶØ🤡
    
    Ta-Em-CHoK kk❓⚡
    `;

    const encryptedData = cryptoService.encrypt(text);
    const decryptedData = cryptoService.decrypt(encryptedData);

    expect(decryptedData).toEqual(text);
  });
});

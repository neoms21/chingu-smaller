var encode = require('./railfence').encode;
var decode = require('./railfence').decode;

const assert = require('assert');
describe('rail fence tests', () => {
    describe('Encode tests', () => {
        it('should encode', () => {
            assert.equal(encode('WEAREDISCOVEREDFLEEATONCE', 10), 'WEEEAALTRFOEDNDECIRESECVO');
            assert.equal(encode('Hello, World!', 3), 'Hoo!el,Wrdl l');
            assert.equal(encode('WEAREDISCOVEREDFLEEATONCE', 4), 'WIREEEDSEEEACAECVDLTNROFO');
            assert.equal(
                encode(
                    'ieirs t mp etreiomio le cr r  sisj.ufenui,!f eti oivtp i!rreana   deseao tunuukeA mvgr  mmeairiia sdiuiDriicrtae  nadcttmaust ttxi eeeef si     i  tne,dillssrp r toaob VeeaeussuaeopxPnftt nir eiauuictsa !neme opcarqu  vesoaameiooniqimtdsenu pii',
                    46
                ),
                'iepemaoximiePr rans iuf risttgast v u mmsenp dai Aiereeue tkiVeruD ieurbainiououiaumtcoii rtcoot t aarslee aes p  e r!cdnsnr ase  dlmr clei ati i ntdopsam,p ieaecusrunanjrstre.!t qsui  udf ti tept  mntx viuvi eqii  si,oe on! eiaofiesao te miefe'
            );
        });
    });

    describe('Decode tests', () => {
        it('should encode', () => {
            assert.equal(decode('WEEEAALTRFOEDNDECIRESECVO', 10), 'WEAREDISCOVEREDFLEEATONCE');
            assert.equal(decode('Hoo!el,Wrdl l', 3), 'Hello, World!');
            assert.equal(
                decode(
                    'iepemaoximiePr rans iuf risttgast v u mmsenp dai Aiereeue tkiVeruD ieurbainiououiaumtcoii rtcoot t aarslee aes p  e r!cdnsnr ase  dlmr clei ati i ntdopsam,p ieaecusrunanjrstre.!t qsui  udf ti tept  mntx viuvi eqii  si,oe on! eiaofiesao te miefe',
                    46
                ),
                'ieirs t mp etreiomio le cr r  sisj.ufenui,!f eti oivtp i!rreana   deseao tunuukeA mvgr  mmeairiia sdiuiDriicrtae  nadcttmaust ttxi eeeef si     i  tne,dillssrp r toaob VeeaeussuaeopxPnftt nir eiauuictsa !neme opcarqu  vesoaameiooniqimtdsenu pii'
            );

            assert.equal(decode('ABCDEF', 5), 'ABCDFE');
        });
    });
});

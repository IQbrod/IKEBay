import { PanierModule } from './panier.module';

describe('PanierModule', () => {
    let panierModule: PanierModule;

    beforeEach(() => {
        panierModule = new PanierModule();
    });

    it('should create an instance', () => {
        expect(panierModule).toBeTruthy();
    });
});

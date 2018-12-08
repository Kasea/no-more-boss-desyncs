class NoMoreDesyncMasterFinalEditionMasterKaseasGodPlanToStopWipingToStupidShitOMEGALUL{
    constructor(dispatch) {
        const { entity } = dispatch.require.library;
        let mobs = {};

        function ayy_lmfao_remove_desyncs_kthx_fam(e) {
            if(entity.mobs[e.gameId.toString()] && (mobs[e.gameId.toString()] || 0) <= Date.now()) dispatch.send('S_INSTANT_MOVE', 3, e);
        }
        dispatch.hook('S_ACTION_END', 5, ayy_lmfao_remove_desyncs_kthx_fam);
    }
}

module.exports = NoMoreDesyncMasterFinalEditionMasterKaseasGodPlanToStopWipingToStupidShitOMEGALUL;
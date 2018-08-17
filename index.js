class NoMoreDesyncMasterFinalEditionMasterKaseasGodPlanToStopWipingToStupidShitOMEGALUL{
    constructor(dispatch) {
        const { entity } = require('library')(dispatch);
        const ver = {
            "s": {
                "72": 6,
                "73": 6,
                "74": 7,
                "75": 8,
                "76": 8
            },
            "e": {
                "72": 4,
                "73": 4,
                "74": 5,
                "75": 5,
                "76": 5
            }
        };
        let mobs = {};

        function ayy_lmfao_remove_desyncs_kthx_fam(e) {
            if(entity.mobs[e.gameId.toString()] && (mobs[e.gameId.toString()] || 0) <= Date.now()) dispatch.send('S_INSTANT_MOVE', 3, e);
        }
        dispatch.hook('S_ACTION_STAGE', ver['s'][dispatch.base.majorPatchVersion], ayy_lmfao_remove_desyncs_kthx_fam);
        dispatch.hook('S_ACTION_END', ver['e'][dispatch.base.majorPatchVersion], ayy_lmfao_remove_desyncs_kthx_fam);

        dispatch.hook('S_CREATURE_ROTATE', 2, e=> {
            if(entity.mobs[e.gameId.toString()]) mobs[e.gameId.toString()] = Date.now() + e.time;
        });
    }
}

module.exports = NoMoreDesyncMasterFinalEditionMasterKaseasGodPlanToStopWipingToStupidShitOMEGALUL;
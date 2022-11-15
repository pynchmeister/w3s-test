package blog

import (
	"math/rand"

	"blog/testutil/sample"
	blogsimulation "blog/x/blog/simulation"
	"blog/x/blog/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = blogsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreatePost = "op_weight_msg_create_post"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreatePost int = 100

	opWeightMsgUploadFilecoin = "op_weight_msg_upload_filecoin"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUploadFilecoin int = 100

	opWeightMsgUploadW3S = "op_weight_msg_upload_w_3_s"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUploadW3S int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	blogGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&blogGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreatePost int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreatePost, &weightMsgCreatePost, nil,
		func(_ *rand.Rand) {
			weightMsgCreatePost = defaultWeightMsgCreatePost
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreatePost,
		blogsimulation.SimulateMsgCreatePost(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUploadFilecoin int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUploadFilecoin, &weightMsgUploadFilecoin, nil,
		func(_ *rand.Rand) {
			weightMsgUploadFilecoin = defaultWeightMsgUploadFilecoin
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUploadFilecoin,
		blogsimulation.SimulateMsgUploadFilecoin(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUploadW3S int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUploadW3S, &weightMsgUploadW3S, nil,
		func(_ *rand.Rand) {
			weightMsgUploadW3S = defaultWeightMsgUploadW3S
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUploadW3S,
		blogsimulation.SimulateMsgUploadW3S(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreatePost{}, "blog/CreatePost", nil)
	cdc.RegisterConcrete(&MsgUploadFilecoin{}, "blog/UploadFilecoin", nil)
	cdc.RegisterConcrete(&MsgUploadW3S{}, "blog/UploadW3S", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePost{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUploadFilecoin{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUploadW3S{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)

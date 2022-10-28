package types

import (
	"encoding/json"

	"github.com/golang/protobuf/proto"
)

type JSONStringOrStrings []string

func EmptyDIDs(strings []string) bool {
	if len(strings) == 0 {
		return true
	}
	for _, did := range strings {
		if !EmptyDID(did) {
			return false
		}
	}
	return true
}

func (strings JSONStringOrStrings) protoType() *Strings {
	values := make([]string, 0, len(strings))

	for _, s := range strings {
		values = append(values, s)
	}
	return &Strings{values}
}

func (strings *JSONStringOrStrings) Marshal() ([]byte, error) {
	return proto.Marshal(strings.protoType())
}

func (strings *JSONStringOrStrings) MarshalTo(data []byte) (n int, err error) {
	return strings.protoType().MarshalTo(data)
}

func (strings *JSONStringOrStrings) Unmarshal(data []byte) error {
	protoType := &Strings{}
	if err := proto.Unmarshal(data, protoType); err != nil {
		return err
	}
	*strings = protoType.Values
	return nil
}

func (strings JSONStringOrStrings) Size() int {
	return strings.protoType().Size()
}

func EmptyDID(did string) bool {
	return did == ""
}

func (strings JSONStringOrStrings) MarshalJSON() ([]byte, error) {
	if len(strings) == 1 { // if only one, treat it as a single string
		return json.Marshal(strings[0])
	}
	return json.Marshal([]string(strings)) // if not, as a list
}

func (strings *JSONStringOrStrings) UnmarshalJSON(data []byte) error {
	var single string
	err := json.Unmarshal(data, &single)
	if err == nil {
		*strings = JSONStringOrStrings{single}
		return nil
	}

	var multiple []string
	if err := json.Unmarshal(data, &multiple); err != nil {
		return err
	}
	*strings = multiple
	return nil
}

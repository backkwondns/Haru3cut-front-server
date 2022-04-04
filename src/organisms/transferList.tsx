import { organismsInterface } from 'interfaces';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Divider } from 'atoms';
import { IconButton } from 'organisms';
import { ArrowBack24, ArrowForward24 } from 'icons';

const Container = styled.div`
  display: flex;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 120px;
  height: 200px;
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #b5b3b3;
  border-radius: 3px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BorderIconButton = styled(IconButton)`
  border: 1px solid #6667ab;
`;

function TransferList(props: organismsInterface.transferListInterface) {
  const { selectedList, nonSelectedList } = props;
  const [nonSelected, setNonSelected] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [nonSelectedCheck, setNonSelectedCheck] = useState<string[]>([]);
  const [selectedCheck, setSelectedCheck] = useState<string[]>([]);
  const [nonSelectAll, setNonSelectAll] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    setSelected(selectedList);
    setNonSelected(nonSelectedList);
  }, []);
  const toggleItem = (event: React.MouseEvent<HTMLDivElement>) => {
    const tag = event.currentTarget.id;
    const isSelected = event.currentTarget.className;
    if (isSelected.includes('nonSelected')) {
      if (nonSelectedCheck.includes(tag)) {
        setNonSelectedCheck(nonSelectedCheck.filter((tagID: string) => tagID !== tag));
      } else {
        setNonSelectedCheck((prevState) => [...prevState, tag]);
      }
    } else if (isSelected.includes('selected')) {
      if (selectedCheck.includes(tag)) {
        setSelectedCheck(selectedCheck.filter((tagID: string) => tagID !== tag));
      } else {
        setSelectedCheck((prevState) => [...prevState, tag]);
      }
    } else if (isSelected.includes('nonSelectAll')) {
      if (nonSelectAll) {
        setNonSelectAll(false);
        setNonSelectedCheck([]);
      } else {
        setNonSelectAll(true);
        setNonSelectedCheck(nonSelected);
      }
    } else if (isSelected.includes('selectAll')) {
      if (selectAll) {
        setSelectAll(false);
        setSelectedCheck([]);
      } else {
        setSelectAll(true);
        setSelectedCheck(selected);
      }
    }
  };

  const transferItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    const direction = event.currentTarget.id;
    if (direction === 'forward') {
      nonSelectedCheck.forEach((tag: string) => {
        // setSelected((prevState) => [...prevState, tag]);
        // setNonSelected((prevState) => [...prevState.filter((item: string) => item !== tag)]);
      });
      setNonSelectedCheck([]);
    } else {
      selectedCheck.forEach((tag: string) => {
        // setNonSelected((prevState) => [...prevState, tag]);
        // setSelected((prevState) => [...prevState.filter((item: string) => item !== tag)]);
      });
      setSelectedCheck([]);
    }
  };
  return (
    <Container>
      <OuterContainer>
        <CheckBoxContainer id="All" className="nonSelectAll" onClick={toggleItem}>
          <input type="checkbox" checked={nonSelectAll} readOnly />
          <span>전체선택</span>
        </CheckBoxContainer>
        <Divider />
        <InnerContainer>
          {nonSelected.map((value) => {
            return (
              <CheckBoxContainer id={value} className="nonSelected" key={value} onClick={toggleItem}>
                <input id={value} type="checkbox" value={value} checked={nonSelectedCheck.includes(value)} readOnly />
                <span>{`${value}`}</span>
              </CheckBoxContainer>
            );
          })}
        </InnerContainer>
      </OuterContainer>
      <ButtonContainer>
        <BorderIconButton
          icon={<ArrowForward24 />}
          style={{ marginBottom: '10px' }}
          id="forward"
          onClick={transferItem}
        />
        <BorderIconButton
          icon={<ArrowBack24 />}
          buttonType="outlined"
          color="#6667ab"
          id="back"
          onClick={transferItem}
        />
      </ButtonContainer>
      <OuterContainer>
        <CheckBoxContainer id="All" className="selectAll" onClick={toggleItem}>
          <input type="checkbox" checked={selectAll} readOnly />
          <span>전체선택</span>
        </CheckBoxContainer>
        <Divider />
        <InnerContainer>
          {selected.map((value) => {
            return (
              <CheckBoxContainer id={value} className="selected" key={value} onClick={toggleItem}>
                <input id={value} type="checkbox" value={value} checked={selectedCheck.includes(value)} readOnly />
                <span>{`${value}`}</span>
              </CheckBoxContainer>
            );
          })}
        </InnerContainer>
      </OuterContainer>
    </Container>
  );
}

export default TransferList;

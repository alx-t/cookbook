# frozen_string_literal: true

require 'rails_helper'

describe JwtService do
  subject { described_class }

  let(:payload) { { 'one' => 'two' } }
  let(:token) { 'eyJhbGciOiJIUzI1NiJ9.eyJvbmUiOiJ0d28ifQ.kJsKShMwvCMhdH0MkJtV1DUkvXGQi6njPYi4n0rFc18' }

  describe '.encode' do
    it { expect(subject.encode(payload)).to eq(token) }
  end

  describe '.decode' do
    it { expect(subject.decode(token)).to eq(payload) }
  end
end
